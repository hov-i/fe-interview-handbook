import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join, basename, dirname, relative } from 'path';

// 허용 카테고리 (정의 순서 = 출력 순서)
const CATEGORIES = [
  'JavaScript', 'TypeScript', 'React', 'CSS', 'HTML',
  'Network', 'Browser', 'CS', '기타',
];

const ROOT = new URL('..', import.meta.url).pathname;
const WEEKS_DIR = join(ROOT, 'weeks');
const README_PATH = join(ROOT, 'README.md');

// ── 파일 수집 ──────────────────────────────────────────────
// weeks/ 하위의 모든 .md 파일을 재귀적으로 수집 (notes.md, README.md 제외)
function collectFiles(dir) {
  const results = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      results.push(...collectFiles(full));
    } else if (
      entry.endsWith('.md') &&
      entry !== 'notes.md' &&
      entry !== 'README.md'
    ) {
      results.push(full);
    }
  }
  return results;
}

// ── 질문 제목 정규화 (중복 판별용) ─────────────────────────
// 소문자화 + 공백/문장부호 전부 제거해서 동일 질문 그룹핑
function normalize(title) {
  return title
    .toLowerCase()
    .replace(/[\s?!.,()'"`\-]/g, '');
}

// ── 질문 파싱 ──────────────────────────────────────────────
// 각 ## 질문에서 카테고리, 답변, 꼬리질문 본문을 통째로 추출
function parseQuestions(filePath) {
  const content = readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');

  // ## 헤더 위치 찾기
  const h2Indices = [];
  for (let i = 0; i < lines.length; i++) {
    if (/^## /.test(lines[i])) h2Indices.push(i);
  }

  const questions = [];

  for (let qi = 0; qi < h2Indices.length; qi++) {
    const idx = h2Indices[qi];
    const title = lines[idx].replace(/^## /, '').trim();

    // 이 질문의 범위: 현재 ## ~ 다음 ## (또는 파일 끝)
    const endIdx = qi + 1 < h2Indices.length ? h2Indices[qi + 1] : lines.length;
    const section = lines.slice(idx + 1, endIdx);

    // 카테고리 파싱 (### 답변 등 다음 헤더 전까지 탐색, 빈 줄 견딤)
    let category = '기타';
    for (const l of section) {
      if (/^#{3} /.test(l)) break;
      const m = l.match(/^-\s+\*\*카테고리\*\*:\s*(.+)$/);
      if (m) {
        category = m[1].trim();
        break;
      }
    }

    // 답변 + 꼬리질문 본문 추출
    // 첫 ### 헤더(답변 등)부터를 본문으로 취급 → 카테고리 메타 라인·빈 줄 확실히 제외
    // --- 구분자와 빈 줄 트림
    let bodyStart = section.findIndex((l) => /^### /.test(l));
    if (bodyStart === -1) {
      // ### 헤더가 없으면 카테고리 라인 다음부터 (폴백)
      const catIdx = section.findIndex((l) =>
        /^-\s+\*\*카테고리\*\*:/.test(l)
      );
      bodyStart = catIdx === -1 ? 1 : catIdx + 1;
    }
    let bodyLines = section.slice(bodyStart);

    // 끝에서 --- 구분자와 빈 줄 제거
    while (bodyLines.length > 0) {
      const last = bodyLines[bodyLines.length - 1].trim();
      if (last === '' || last === '---') bodyLines.pop();
      else break;
    }

    // 앞쪽 빈 줄 제거
    while (bodyLines.length > 0 && bodyLines[0].trim() === '') {
      bodyLines.shift();
    }

    const body = bodyLines.join('\n');

    questions.push({ title, category, body });
  }

  return questions;
}

// ── 답변 본문 분리 ─────────────────────────────────────────
// body를 "답변 부분"과 "꼬리질문 목록"으로 분리
function splitBody(body) {
  const lines = body.split('\n');
  let tailIdx = -1;
  for (let i = 0; i < lines.length; i++) {
    if (/^###\s+꼬리질문/.test(lines[i])) {
      tailIdx = i;
      break;
    }
  }

  if (tailIdx === -1) {
    return { answer: body.trimEnd(), tails: [] };
  }

  const answerLines = lines.slice(0, tailIdx);
  while (answerLines.length && answerLines[answerLines.length - 1].trim() === '') {
    answerLines.pop();
  }

  const tails = [];
  for (const l of lines.slice(tailIdx + 1)) {
    const t = l.trim();
    if (t.startsWith('-')) tails.push(t);
  }

  return { answer: answerLines.join('\n'), tails };
}

// ── 같은 질문 답변 병합 ────────────────────────────────────
// 답변들은 순서대로 이어붙이고, 꼬리질문은 중복 제거해 하나로 통합
function mergeGroup(group) {
  if (group.length === 1) return group[0].body;

  const answerBlocks = [];
  const seenTails = new Set();
  const mergedTails = [];

  for (const q of group) {
    const { answer, tails } = splitBody(q.body);
    if (answer.trim()) answerBlocks.push(answer.trim());
    for (const t of tails) {
      const key = normalize(t);
      if (!seenTails.has(key)) {
        seenTails.add(key);
        mergedTails.push(t);
      }
    }
  }

  let out = answerBlocks.join('\n\n');
  if (mergedTails.length) {
    out += '\n\n### 꼬리질문\n' + mergedTails.join('\n');
  }
  return out;
}

// ── GitHub Models AI 병합 ──────────────────────────────────
// gpt-4o-mini로 여러 답변을 자연스럽게 하나로 병합 (토큰 있을 때만)
const GH_MODELS_URL = 'https://models.github.ai/inference/chat/completions';
const GH_MODEL = 'openai/gpt-4o-mini';
const AI_TOKEN = process.env.GITHUB_MODELS_TOKEN || process.env.GITHUB_TOKEN || '';

const MERGE_SYSTEM = `너는 프론트엔드 기술면접 답변을 편집하는 에디터야.
같은 질문에 대해 여러 사람이 각자 작성한 답변들을 받게 돼. 이걸 하나의 완성도 높은 답변으로 병합해줘.

규칙:
- 각 답변의 서로 다른 관점과 정보를 빠짐없이 보완해서 합칠 것 (내용 누락 금지)
- 중복되는 설명은 하나로 자연스럽게 정리
- 반드시 마크다운 "### 답변" 섹션으로 시작하고, 마지막에 "### 꼬리질문" 섹션을 둘 것
- 꼬리질문은 모든 답변의 것을 모아 중복 제거
- 코드 예시가 있으면 가장 좋은 것을 선택하거나 통합
- 출력은 병합된 본문만. 질문 제목(## ...)이나 "- **카테고리**" 줄은 절대 포함하지 말 것
- 서두·설명 없이 바로 "### 답변" 부터 출력`;

async function mergeGroupWithAI(title, group) {
  const answers = group
    .map((q, i) => `### 답변안 ${i + 1}\n${q.body}`)
    .join('\n\n');

  const res = await fetch(GH_MODELS_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${AI_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: GH_MODEL,
      temperature: 0.3,
      messages: [
        { role: 'system', content: MERGE_SYSTEM },
        {
          role: 'user',
          content: `질문: ${title}\n\n아래는 이 질문에 대한 ${group.length}개의 서로 다른 답변이야. 하나로 병합해줘.\n\n${answers}`,
        },
      ],
    }),
  });

  if (!res.ok) {
    throw new Error(`GitHub Models ${res.status}: ${await res.text()}`);
  }

  const data = await res.json();
  const content = data?.choices?.[0]?.message?.content?.trim();
  if (!content) throw new Error('GitHub Models 응답이 비어있음');
  return content;
}

// 그룹을 병합: 답변이 여럿이면 AI(토큰 有) 또는 기본 병합으로 처리
async function resolveBody(title, group) {
  if (group.length === 1) return group[0].body;

  if (AI_TOKEN) {
    try {
      const merged = await mergeGroupWithAI(title, group);
      console.log(`  ✓ AI 병합: "${title}" (${group.length}개 답변)`);
      return merged;
    } catch (e) {
      console.warn(`  ⚠ AI 병합 실패, 기본 병합으로 대체: "${title}" — ${e.message}`);
    }
  }
  return mergeGroup(group);
}

// 불릿("- 텍스트")에서 순수 텍스트 추출
function stripBullet(line) {
  return line.replace(/^-\s+/, '').trim();
}

// <summary> 안에서 HTML 태그가 렌더링되지 않도록 이스케이프
function escapeHtml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

// ── 꼬리질문 ↔ 답변 의미 매칭 (AI 또는 정확 매칭) ──────────
// followups: [{ text }], candidates: [{ title, body, key }]
// 반환: Map<followupText, candidate>
async function matchFollowups(followups, candidates) {
  const map = new Map();
  if (followups.length === 0 || candidates.length === 0) return map;

  // 폴백: 정규화(정확) 매칭
  const byKey = new Map();
  for (const c of candidates) if (!byKey.has(c.key)) byKey.set(c.key, c);
  const exactMatch = () => {
    for (const f of followups) {
      const c = byKey.get(normalize(f.text));
      if (c) map.set(f.text, c);
    }
    return map;
  };

  if (!AI_TOKEN) return exactMatch();

  // 1단계: 정확 매칭으로 먼저 잡을 수 있는 것 처리
  exactMatch();

  // 2단계: 정확 매칭에서 빠진 것만 AI 의미 매칭
  const unmatched = followups.filter((f) => !map.has(f.text));
  if (unmatched.length === 0) return map;

  // 꼬리질문을 10개씩 배치로 나눠서 AI 호출 (후보 수가 많을 때 번호 혼동 방지)
  const BATCH_SIZE = 10;
  for (let i = 0; i < unmatched.length; i += BATCH_SIZE) {
    const batch = unmatched.slice(i, i + BATCH_SIZE);
    try {
      const candList = candidates.map((c, ci) => `${ci}: ${c.title}`).join('\n');
      const foList = batch.map((f, fi) => `${fi}: ${f.text}`).join('\n');

      const res = await fetch(GH_MODELS_URL, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${AI_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: GH_MODEL,
          temperature: 0,
          response_format: { type: 'json_object' },
          messages: [
            {
              role: 'system',
              content:
                '너는 프론트엔드 기술면접 질문 매칭 도우미야.\n' +
                '"꼬리질문"과 "후보 답변 질문"이 **같은 주제에 대해 실질적으로 같은 것을 묻는 경우**에만 매칭해.\n' +
                '매칭 기준:\n' +
                '- 표현이 달라도 묻는 핵심이 같으면 매칭 (예: "TDZ는 무엇인가요?" ↔ "TDZ(Temporal Dead Zone)란 무엇인가요?")\n' +
                '- 주제나 카테고리가 다르면 절대 매칭하지 마 (예: CSS 질문 ↔ JavaScript 질문)\n' +
                '- 애매하면 매칭하지 마 (candidate=null)\n' +
                '반드시 {"matches":[{"followup":번호,"candidate":번호|null}]} 형식의 JSON만 출력.',
            },
            {
              role: 'user',
              content: `[꼬리질문]\n${foList}\n\n[후보 답변 질문]\n${candList}`,
            },
          ],
        }),
      });
      if (!res.ok) throw new Error(`${res.status}: ${await res.text()}`);

      const data = await res.json();
      const parsed = JSON.parse(data.choices[0].message.content);
      for (const m of parsed.matches || []) {
        if (m.candidate == null) continue;
        const f = batch[m.followup];
        const c = candidates[m.candidate];
        if (!f || !c) continue;

        // 검증: 정규화된 키가 최소 2개 이상의 단어를 공유하는지 확인
        const fWords = new Set(normalize(f.text).replace(/[^가-힣a-z0-9]/g, ' ').split(/\s+/).filter(w => w.length > 1));
        const cWords = new Set(normalize(c.title).replace(/[^가-힣a-z0-9]/g, ' ').split(/\s+/).filter(w => w.length > 1));
        let shared = 0;
        for (const w of fWords) if (cWords.has(w)) shared++;

        if (shared >= 2) {
          map.set(f.text, c);
          console.log(`  ✓ 꼬리질문 매칭: "${f.text}" → "${c.title}"`);
        } else {
          console.log(`  ✗ 매칭 거부 (공유 단어 부족): "${f.text}" → "${c.title}"`);
        }
      }
    } catch (e) {
      console.warn(`  ⚠ 꼬리질문 AI 매칭 실패 (배치 ${i / BATCH_SIZE + 1}) — ${e.message}`);
    }
  }
  return map;
}

// 본문의 꼬리질문 불릿 중 매칭된 항목을 "펼치면 답변 나오는 중첩 토글"로 변환
function nestFollowups(body, followupMap) {
  const lines = body.split('\n');
  const out = [];
  let inTail = false;

  for (const line of lines) {
    if (/^###\s+꼬리질문/.test(line)) {
      inTail = true;
      out.push(line);
      continue;
    }
    if (inTail && /^-\s+/.test(line)) {
      const text = stripBullet(line);
      const c = followupMap.get(text);
      if (c) {
        out.push('');
        out.push('<details>');
        out.push(`<summary>${escapeHtml(text)}</summary>`);
        out.push('');
        out.push(c.body);
        out.push('');
        out.push('</details>');
        continue;
      }
      // 매칭 안 된 꼬리질문도 HTML 태그 이스케이프
      out.push(`- ${escapeHtml(text)}`);
      continue;
    }
    out.push(line);
  }
  return out.join('\n');
}

// ── 메인 로직 ──────────────────────────────────────────────
async function main() {
  const files = collectFiles(WEEKS_DIR);
  const allQuestions = []; // { title, category, body }

  for (const filePath of files) {
    const parsed = parseQuestions(filePath);
    allQuestions.push(...parsed);
  }

  // ── 꼬리질문/후보 분석 ───────────────────────────────────
  for (const q of allQuestions) {
    const { tails } = splitBody(q.body);
    q.tails = tails.map(stripBullet);
    q.key = normalize(q.title);
  }

  // 후보 = 꼬리질문 섹션이 없는 '답변 전용' 질문 (예: 2주차 답변 파일)
  const candidates = allQuestions.filter((q) => q.tails.length === 0);

  // 매칭 대상 꼬리질문 (중복 텍스트 제거)
  const followupSet = new Map();
  for (const q of allQuestions) {
    for (const t of q.tails) {
      if (!followupSet.has(t)) followupSet.set(t, { text: t });
    }
  }
  const followups = [...followupSet.values()];

  // 꼬리질문 ↔ 답변 매칭 → 중첩 대상 결정
  const followupMap = await matchFollowups(followups, candidates);
  const nestedKeys = new Set();
  for (const c of followupMap.values()) nestedKeys.add(c.key);

  // ── 카테고리별 그룹핑 (중첩된 후보는 독립 목록에서 제외) ──
  const byCategory = new Map();
  for (const cat of CATEGORIES) byCategory.set(cat, []);

  for (const q of allQuestions) {
    if (nestedKeys.has(q.key)) continue; // 꼬리질문에 붙은 답변은 독립 렌더 제외
    const cat = CATEGORIES.includes(q.category) ? q.category : '기타';
    byCategory.get(cat).push(q);
  }

  // ── 중복 묶기 + 정렬 + 토글 생성 ────────────────────────
  const tocLines = [];
  let uniqueCount = 0;

  for (const cat of CATEGORIES) {
    const items = byCategory.get(cat);
    if (items.length === 0) continue;

    // 정규화 키로 그룹핑 (같은 질문의 답변들을 모두 모음)
    const groups = new Map();
    for (const q of items) {
      if (!groups.has(q.key)) groups.set(q.key, []);
      groups.get(q.key).push(q);
    }

    // 그룹별로 답변 병합 후, 꼬리질문에 답변 중첩
    const merged = [];
    for (const group of groups.values()) {
      const body = await resolveBody(group[0].title, group);
      merged.push({
        title: group[0].title,
        body: nestFollowups(body, followupMap),
      });
    }

    // 한글 가나다순 정렬
    const sorted = merged.sort((a, b) =>
      a.title.localeCompare(b.title, 'ko')
    );

    tocLines.push(`### ${cat}`);
    tocLines.push('');

    for (const q of sorted) {
      uniqueCount++;
      tocLines.push(`<details>`);
      tocLines.push(`<summary>${escapeHtml(q.title)}</summary>`);
      tocLines.push('');
      tocLines.push(q.body);
      tocLines.push('');
      tocLines.push(`</details>`);
      tocLines.push('');
    }
  }

  // ── 통계 헤더 ────────────────────────────────────────────
  const now = new Date().toISOString().slice(0, 10);
  const statsHeader = [
    `> **${uniqueCount}** 개 질문 · 마지막 업데이트: ${now}`,
    '',
  ];

  const tocContent = [...statsHeader, ...tocLines].join('\n').trimEnd();

  // ── README 교체 ──────────────────────────────────────────
  const readme = readFileSync(README_PATH, 'utf-8');
  const startMarker = '<!-- TOC:START -->';
  const endMarker = '<!-- TOC:END -->';
  const startIdx = readme.indexOf(startMarker);
  const endIdx = readme.indexOf(endMarker);

  if (startIdx === -1 || endIdx === -1) {
    console.error('오류: README.md에서 TOC 마커를 찾을 수 없습니다.');
    process.exit(1);
  }

  const before = readme.slice(0, startIdx + startMarker.length);
  const after = readme.slice(endIdx);
  const newReadme = `${before}\n${tocContent}\n${after}`;

  writeFileSync(README_PATH, newReadme, 'utf-8');
  console.log(`README.md 갱신 완료! (${uniqueCount}개 질문)`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
