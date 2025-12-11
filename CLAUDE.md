# My Dev Portfolio

프론트엔드 개발자 이준희의 포트폴리오 웹사이트

## 기술 스택

- **Framework**: Next.js 16 + React 19 + TypeScript
- **Styling**: Tailwind CSS 4 + shadcn/ui
- **i18n**: next-intl (ko/en)
- **Theme**: next-themes (다크/라이트 모드)
- **Animation**: Framer Motion
- **Analytics**: Google Analytics 4 (G-6JY60CZ148)

## 프로젝트 구조

```
src/
├── app/
│   ├── [locale]/           # 다국어 라우팅 (ko, en)
│   │   ├── layout.tsx      # 로케일별 레이아웃
│   │   ├── page.tsx        # 메인 페이지 (모든 섹션 포함)
│   │   └── not-found.tsx   # 로케일별 404 페이지
│   ├── layout.tsx          # 루트 레이아웃 (폰트, 메타데이터, GA)
│   ├── not-found.tsx       # 루트 404 페이지
│   ├── globals.css         # 전역 스타일
│   ├── robots.ts           # robots.txt 생성
│   └── sitemap.ts          # sitemap.xml 생성
│
├── components/
│   ├── ui/                 # shadcn/ui 컴포넌트
│   ├── common/             # 공통 컴포넌트
│   │   ├── liquid-ether.tsx  # 배경 애니메이션
│   │   └── ascii-text.tsx    # ASCII 텍스트 효과
│   ├── layout/             # Header, Footer
│   ├── sections/           # 포트폴리오 섹션들
│   │   ├── hero.tsx        # 히어로 섹션
│   │   ├── about.tsx       # 소개 (핵심 역량, 비즈니스 임팩트)
│   │   ├── experience.tsx  # 경력
│   │   ├── projects.tsx    # 프로젝트
│   │   ├── skills.tsx      # 기술 스택
│   │   ├── education.tsx   # 학력/자격증
│   │   ├── blog.tsx        # 블로그
│   │   └── contact.tsx     # 연락처
│   └── providers/          # Theme Provider
│
├── i18n/
│   ├── messages/           # 번역 파일
│   │   ├── ko.json         # 한국어
│   │   └── en.json         # 영어
│   ├── config.ts           # 로케일 설정
│   ├── navigation.ts       # 다국어 네비게이션
│   └── request.ts          # 메시지 로딩
│
├── lib/
│   ├── utils.ts            # cn() 유틸리티
│   ├── blog.ts             # 블로그 데이터 fetching
│   ├── fonts.ts            # 폰트 설정
│   └── gtag.ts             # Google Analytics 유틸리티
│
└── types/
    └── gtag.d.ts           # gtag 타입 선언
```

## 이력서 업데이트 워크플로우

새 이력서(PDF)가 제공되면:

1. `resume/` 폴더의 PDF 파일 읽기
2. `src/i18n/messages/ko.json`, `en.json`과 비교
3. 변경/추가된 내용 식별 및 보고
4. 사용자 확인 후 JSON 파일 업데이트
5. 필요시 컴포넌트 수정

### 이력서 업데이트 프롬프트

```
새 이력서를 제공합니다. 다음 작업을 수행해주세요:

1. `resume/` 폴더의 PDF 파일을 읽어주세요
2. 현재 `src/i18n/messages/ko.json`과 `en.json` 내용과 비교해주세요
3. 변경되거나 추가된 내용을 목록으로 정리해주세요:
   - 경력 사항 변경
   - 프로젝트 추가/수정
   - 기술 스택 변경
   - 자격증/교육 추가
4. 확인 후 JSON 파일 업데이트를 진행해주세요
5. 필요시 컴포넌트 수정도 진행해주세요
```

## 주요 파일 경로

| 용도 | 경로 |
|------|------|
| 이력서 PDF | `resume/이준희 이력서-YYMMDD.pdf` |
| 다운로드용 이력서 | `public/resume/resume-YYMMDD.pdf` |
| 한국어 번역 | `src/i18n/messages/ko.json` |
| 영어 번역 | `src/i18n/messages/en.json` |
| 프로젝트 이미지 | `public/images/projects/` |
| 비즈니스 임팩트 이미지 | `public/images/business_impact/` |
| GA 유틸리티 | `src/lib/gtag.ts` |
| GA 타입 선언 | `src/types/gtag.d.ts` |
| 공통 컴포넌트 | `src/components/common/` |

## 실행 명령어

```bash
pnpm install    # 의존성 설치
pnpm dev        # 개발 서버 (http://localhost:3000)
pnpm build      # 프로덕션 빌드
pnpm start      # 프로덕션 서버
pnpm lint       # 린트 검사
```
