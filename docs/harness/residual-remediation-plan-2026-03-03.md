# Residual Harness Remediation Plan (2026-03-03)

## 0) 기준 점수

사용자 제공 체크리스트 결과(84항목):

| 카테고리 | 전체 | 통과 | 실패 | 통과율 |
|---|---:|---:|---:|---:|
| 1. Agent Entry Point | 15 | 12 | 3 | 80.0% |
| 2. 문서 구조 | 12 | 8 | 4 | 66.7% |
| 3. Invariant 강제 | 15 | 12 | 3 | 80.0% |
| 4. 아키텍처 | 12 | 7 | 5 | 58.3% |
| 5. Source of Truth | 10 | 7 | 3 | 70.0% |
| 6. 운영/유지보수 | 10 | 5 | 5 | 50.0% |
| 7. Agent 가독성 | 10 | 7 | 3 | 70.0% |
| **합계** | **84** | **58** | **26** | **69.0%** |

## 1) 왜 실패했는가 (카테고리별 원인)

### 1. Agent Entry Point (실패 3)

- 단일 테스트 파일 실행 명령이 문서에 없었음 (`README.md`)
- gotchas/환경 주의점이 분산되어 에이전트 진입 속도가 느림 (`README.md`, `CLAUDE.md`)
- 에이전트 전용 entry guide가 루트에 부재 (`AGENTS.md` 없음)

### 2. 문서 구조 (실패 4)

- 개발 가이드 문서 부재
- API 계약 문서 부재
- CHANGELOG 부재
- 실행 가능한 검증 예제(명령 중심) 문서가 약함

### 3. Invariant 강제 (실패 3)

- 보안 취약점 스캔이 CI에 자동화되어 있지 않음
- 테스트 커버리지 기준/게이트 미설정
- 브랜치 보호 규칙은 레포 설정 영역이라 코드베이스만으로 강제 불가

### 4. 아키텍처 (실패 5)

- import 경계/의존성 방향을 도구로 강제하지 않음
- 순환 의존성 자동 검증 도구 부재
- 에러 처리 규약 문서/패턴 표준 부재
- 외부 의존성 접근 추상화가 부분적
- 대형 파일(`liquid-ether-engine.tsx`) 중심의 응집도 문제

### 5. Source of Truth (실패 3)

- PR 템플릿 부재
- 레포 내 로드맵 문서 부재
- TODO 항목의 이슈 연결/정리 루틴 부재 (`src/app/robots.ts`, `src/app/sitemap.ts`)

### 6. 운영/유지보수 (실패 5)

- dead code 탐지 도구 미도입
- 의존성 업데이트 자동화 미도입
- stale dependency 식별 루틴 미도입
- health check 엔드포인트 부재
- 구조화 로깅/관측 표준 미정

### 7. Agent 가독성 (실패 3)

- 300줄 초과 파일 존재 (`src/components/common/liquid-ether-engine.tsx`, `src/components/common/ascii-text.tsx`)
- 함수/컴포넌트 단위가 큰 파일 다수 존재
- 일부 모듈의 public API 경계가 문서/코드에서 명시적이지 않음

## 2) 해결 전략

## Quick Wins (당일)

| 우선순위 | 액션 | 기대 효과 | 상태 |
|---|---|---|---|
| 1 | `AGENTS.md` 추가 | Entry Point 실패 3개 중 2~3개 해소 | Done |
| 2 | `docs/development-guide.md` 추가 | 문서 구조/실행 예제 보강 | Done |
| 3 | `docs/api-contract.md` + `/api/health` 추가 | 아키텍처/운영 가시성 개선 | Done |
| 4 | `CHANGELOG.md`, `ROADMAP.md` 추가 | Source of Truth 강화 | Done |
| 5 | PR 템플릿 + Dependabot + Security Audit 워크플로우 | Invariant/운영 자동화 보강 | Done |

## 단기 개선 (1~2주)

| 우선순위 | 액션 | 관련 카테고리 | Definition of Done |
|---|---|---|---|
| 1 | 커버리지 기준 수립 및 CI 강제 | 3 | `pnpm test:coverage` + threshold + CI fail 조건 |
| 2 | dead code 검사 도구 도입 (`knip`) | 6 | 스크립트/설정 추가 + 주간 실행 |
| 3 | 순환 의존성/아키텍처 규칙 검사 도입 | 4 | 도구 기반 cycle check + CI 통합 |
| 4 | `liquid-ether-engine` 추가 분해 | 4,7 | 파일 300줄 이하, 핵심 로직 모듈 분리 |
| 5 | TODO 이슈 연결 정책 문서화 | 5 | TODO마다 이슈 ID 연결 규칙 확정 |

## 3) 실행 루프 (반복)

1. 단계 목표 확정 (Quick Win 또는 단기 항목 1개)
2. 코드/문서 변경
3. `pnpm verify:harness` 통과
4. `harness-diagnostics` Maintenance 리포트 기록 (`docs/harness/reports/`)
5. 체크리스트 재계산 후 다음 단계로 진행

## 4) 현재 브랜치

- `codex/harness-residual-loop-2026-03-03`
