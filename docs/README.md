# Engineering Docs

## Quality Gates

프로젝트의 기본 품질 게이트는 아래 명령 하나로 확인합니다.

```bash
pnpm verify:harness
```

검증 순서:

1. `pnpm lint`
2. `pnpm typecheck`
3. `pnpm format:check`
4. `pnpm test`
5. `pnpm build`

## CI

- 파일: `.github/workflows/quality-gates.yml`
- `main`, `codex/**` 브랜치 push와 `main` 대상 PR에서 `verify:harness`를 실행합니다.
- 보안 감사: `.github/workflows/security-audit.yml`에서 `pnpm audit:security`를 실행합니다.

## Pre-commit

Husky + lint-staged가 커밋 전에 아래를 자동 실행합니다.

1. `prettier --write` (staged 파일)
2. `eslint --fix` (staged 파일)
3. `pnpm typecheck`
4. `pnpm test`

## Harness Diagnostics Reports

진단 기록은 아래 경로에 누적합니다.

- `docs/harness/reports/`

## Additional Docs

- 개발 가이드: `docs/development-guide.md`
- API 계약: `docs/api-contract.md`
- ADR: `docs/adr/0001-quality-gates.md`
- 변경 이력: `CHANGELOG.md`
- 로드맵: `ROADMAP.md`
