import { readFileSync, readdirSync, statSync, existsSync } from 'fs';
import { join, basename, dirname, relative, resolve, isAbsolute } from 'path';

// 허용 카테고리
const CATEGORIES = [
  'JavaScript', 'TypeScript', 'React', 'CSS', 'HTML',
  'Network', 'Browser', 'CS', '기타',
];

const ROOT = new URL('..', import.meta.url).pathname;
const WEEKS_DIR = join(ROOT, 'weeks');

// ── 파일 수집 ──────────────────────────────────────────────
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
function parseMeta(lines) {
  const meta = { category: null };
  for (const line of lines) {
    // "- **키**: 값" 패턴 매칭
    const m = line.match(/^-\s+\*\*(.+?)\*\*:\s*(.+)$/);
    if (m) {
      const key = m[1].trim();
      const val = m[2].trim();
      if (key === '카테고리') meta.category = val;
    }
  }
  return meta;
}

// ── 검사 대상 파일 결정 ────────────────────────────────────
// 인자로 파일 목록이 넘어오면(=PR에서 변경된 파일) 그것만 검사하고,
// 없으면 weeks/ 전체를 스캔합니다(로컬 실행용 폴백).
function resolveTargets() {
  const args = process.argv.slice(2).filter(Boolean);
  if (args.length === 0) return collectFiles(WEEKS_DIR);

  return args
    .map((f) => (isAbsolute(f) ? f : resolve(ROOT, f)))
    .filter(
      (f) =>
        f.endsWith('.md') &&
        basename(f) !== 'notes.md' &&
        basename(f) !== 'README.md' &&
        existsSync(f)
    );
}

// ── 검증 ───────────────────────────────────────────────────
function main() {
  const files = resolveTargets();

  if (files.length === 0) {
    console.log('검증할 파일이 없습니다.');
    process.exit(0);
  }

  const errors = [];

  for (const filePath of files) {
    const relPath = relative(ROOT, filePath);
    const content = readFileSync(filePath, 'utf-8');
    const lines = content.split('\n');

    // ## 헤더 위치 찾기
    const h2Indices = [];
    for (let i = 0; i < lines.length; i++) {
      if (/^## /.test(lines[i])) h2Indices.push(i);
    }

    // 최소 질문 수 검사
    if (h2Indices.length < 10) {
      errors.push(
        `[${relPath}] 질문이 ${h2Indices.length}개뿐입니다. 최소 10개 필요합니다.`
      );
    }

    for (const idx of h2Indices) {
      const title = lines[idx].replace(/^## /, '').trim();
      // 바로 아래 줄에서 카테고리 파싱
      const metaLines = lines.slice(idx + 1, idx + 2);
      const meta = parseMeta(metaLines);

      // 카테고리 존재 여부
      if (!meta.category) {
        errors.push(
          `[${relPath}] "${title}" — 카테고리 메타 라인이 없습니다.`
        );
      } else if (!CATEGORIES.includes(meta.category)) {
        errors.push(
          `[${relPath}] "${title}" — 허용되지 않는 카테고리입니다: "${meta.category}" (허용: ${CATEGORIES.join(', ')})`
        );
      }
    }
  }

  // ── 결과 출력 ────────────────────────────────────────────
  if (errors.length > 0) {
    console.error('검증 실패!\n');
    for (const err of errors) {
      console.error(`  ✗ ${err}`);
    }
    console.error(`\n총 ${errors.length}개 오류`);
    process.exit(1);
  } else {
    console.log(`검증 통과! (${files.length}개 파일)`);
  }
}

main();
