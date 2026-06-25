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

// ── 메타 파싱 ──────────────────────────────────────────────
// "- **카테고리**: JavaScript" 같은 라인에서 값 추출
function parseMeta(lines) {
  const meta = {};
  for (const line of lines) {
    // 굵은 글씨(**key**) 뒤 콜론+값 패턴
    const m = line.match(/^-\s+\*\*(.+?)\*\*:\s*(.+)$/);
    if (m) {
      const key = m[1].trim();
      const val = m[2].trim();
      if (key === '카테고리') meta.category = val;
    }
  }
  return meta;
}

// ── GitHub anchor 생성 ─────────────────────────────────────
// GitHub 규칙: 소문자화, 공백→하이픈, 특수문자(?!.,()'"`) 제거
function toAnchor(title) {
  return title
    .toLowerCase()
    .replace(/[?!.,()'"`]/g, '')  // 특수문자 제거
    .replace(/\s+/g, '-')          // 공백 → 하이픈
    .replace(/-+/g, '-')           // 연속 하이픈 정리
    .replace(/^-|-$/g, '');        // 양 끝 하이픈 제거
}

// ── 질문 제목 정규화 (중복 판별용) ─────────────────────────
// 소문자화 + 공백/문장부호 전부 제거해서 동일 질문 그룹핑
function normalize(title) {
  return title
    .toLowerCase()
    .replace(/[\s?!.,()'"`\-]/g, '');
}

// ── 메인 로직 ──────────────────────────────────────────────
function main() {
  const files = collectFiles(WEEKS_DIR);
  const questions = []; // { title, category, author, week, filePath, anchor }

  for (const filePath of files) {
    const relPath = relative(ROOT, filePath);        // weeks/week-01/hovi.md
    const author = basename(filePath, '.md');          // hovi
    const week = basename(dirname(filePath));          // week-01
    const content = readFileSync(filePath, 'utf-8');
    const lines = content.split('\n');

    // ## 헤더 위치 찾기
    const h2Indices = [];
    for (let i = 0; i < lines.length; i++) {
      if (/^## /.test(lines[i])) h2Indices.push(i);
    }

    for (const idx of h2Indices) {
      // ## 제목 추출
      const title = lines[idx].replace(/^## /, '').trim();
      // 바로 아래 줄에서 메타 파싱 (카테고리 1줄)
      const metaLines = lines.slice(idx + 1, idx + 2);
      const meta = parseMeta(metaLines);

      questions.push({
        title,
        category: meta.category || '기타',
        author,
        week,
        filePath: relPath,
        anchor: toAnchor(title),
      });
    }
  }

  // ── 카테고리별 그룹핑 ────────────────────────────────────
  const byCategory = new Map();
  for (const cat of CATEGORIES) byCategory.set(cat, []);

  for (const q of questions) {
    const cat = CATEGORIES.includes(q.category) ? q.category : '기타';
    byCategory.get(cat).push(q);
  }

  // ── 중복 묶기 + 정렬 ────────────────────────────────────
  const tocLines = [];
  let uniqueCount = 0;
  let totalCount = 0;

  for (const cat of CATEGORIES) {
    const items = byCategory.get(cat);
    if (items.length === 0) continue;

    // 정규화 키로 그룹핑
    const groups = new Map();
    for (const q of items) {
      const key = normalize(q.title);
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push(q);
    }

    // 한글 가나다순 정렬 (대표 질문 제목 기준)
    const sortedGroups = [...groups.entries()].sort((a, b) =>
      a[1][0].title.localeCompare(b[1][0].title, 'ko')
    );

    tocLines.push(`### ${cat} (${sortedGroups.length})`);
    tocLines.push('');

    for (const [, group] of sortedGroups) {
      uniqueCount++;
      totalCount += group.length;

      if (group.length === 1) {
        // 단일 작성자 → 한 줄 링크
        const q = group[0];
        tocLines.push(
          `- [${q.title}](${q.filePath}#${q.anchor}) — ${q.week} / ${q.author}`
        );
      } else {
        // 복수 작성자 → 제목 볼드 + 서브리스트
        const repr = group[0];
        tocLines.push(`- **${repr.title}**`);
        for (const q of group) {
          tocLines.push(`  - [${q.week} / ${q.author}](${q.filePath}#${q.anchor})`);
        }
      }
    }

    tocLines.push('');
  }

  // ── 통계 헤더 ────────────────────────────────────────────
  const now = new Date().toISOString().slice(0, 10); // YYYY-MM-DD
  const statsHeader = [
    `> **${uniqueCount}** 고유 질문 · **${totalCount}** 총 등장 · 마지막 업데이트: ${now}`,
    '',
  ];

  const tocContent = [...statsHeader, ...tocLines].join('\n').trimEnd();

  // ── README 교체 ──────────────────────────────────────────
  const readme = readFileSync(README_PATH, 'utf-8');
  // <!-- TOC:START --> 와 <!-- TOC:END --> 사이 영역만 교체
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
  console.log(`README.md 갱신 완료! (고유 질문: ${uniqueCount}, 총 등장: ${totalCount})`);
}

main();
