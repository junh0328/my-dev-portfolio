# Development Guide

## 1. 로컬 실행

```bash
pnpm install
pnpm dev
```

## 2. 품질 게이트

```bash
pnpm verify:harness
```

개별 실행:

```bash
pnpm lint
pnpm typecheck
pnpm format:check
pnpm test
pnpm build
pnpm test:file src/lib/duration.test.ts
```

## 3. 작업 흐름

1. 브랜치 생성: `codex/*`
2. 코드/문서 변경
3. `pnpm verify:harness` 통과
4. PR 생성 후 CI 통과 확인

## 4. 환경 변수/설정 주의

- `SKIP_RSS_FETCH=1`를 사용하면 RSS 네트워크 의존 없이 빌드 검증 가능
- 배포 도메인 변경 시 `src/app/robots.ts`, `src/app/sitemap.ts` 동시 수정

## 5. 참고 문서

- 아키텍처 개요: `docs/api-contract.md`
- 품질 게이트 ADR: `docs/adr/0001-quality-gates.md`
- 진단 리포트: `docs/harness/reports/`
