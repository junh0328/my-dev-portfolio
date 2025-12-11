# My Dev Portfolio

프론트엔드 개발자 이준희의 개인 포트폴리오 웹사이트입니다.

## 주요 특징

- **다국어 지원** - 한국어/영어 전환 가능
- **다크 모드** - 라이트/다크/시스템 테마 지원
- **반응형 디자인** - 모바일, 태블릿, 데스크탑 대응
- **SEO 최적화** - 메타태그, sitemap, robots.txt 설정

## 기술 스택

| 분류 | 기술 |
|------|------|
| Framework | Next.js 16, React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS 4, shadcn/ui |
| Animation | Framer Motion |
| i18n | next-intl |
| Theme | next-themes |

## 실행 방법

```bash
# 의존성 설치
pnpm install

# 개발 서버 실행 (http://localhost:3000)
pnpm dev

# 프로덕션 빌드
pnpm build

# 프로덕션 서버 실행
pnpm start

# 린트 검사
pnpm lint
```

## 프로젝트 구조

```
src/
├── app/                    # Next.js App Router
│   ├── [locale]/           # 다국어 라우팅 (ko, en)
│   ├── globals.css         # 전역 스타일
│   ├── robots.ts           # robots.txt 생성
│   └── sitemap.ts          # sitemap.xml 생성
│
├── components/
│   ├── ui/                 # shadcn/ui 컴포넌트
│   ├── layout/             # Header, Footer
│   ├── sections/           # 포트폴리오 섹션들
│   │   ├── hero.tsx        # 히어로 섹션
│   │   ├── about.tsx       # 소개 섹션
│   │   ├── experience.tsx  # 경력 섹션
│   │   ├── projects.tsx    # 프로젝트 섹션
│   │   ├── skills.tsx      # 기술 스택 섹션
│   │   ├── education.tsx   # 학력/자격증 섹션
│   │   ├── blog.tsx        # 블로그 섹션
│   │   └── contact.tsx     # 연락처 섹션
│   └── providers/          # Theme Provider
│
├── i18n/                   # 국제화 설정
│   ├── messages/           # 번역 파일 (ko.json, en.json)
│   ├── config.ts           # 로케일 설정
│   └── navigation.ts       # 다국어 네비게이션
│
└── lib/                    # 유틸리티 함수
```

## 포트폴리오 섹션

1. **Hero** - 프로필 소개 및 CTA 버튼
2. **About** - 핵심 역량 및 비즈니스 임팩트
3. **Experience** - 경력 사항 (타임라인)
4. **Projects** - 주요 프로젝트 (SPOT, P2P, KYC 등)
5. **Skills** - 기술 스택 (React, Next.js, TypeScript 등)
6. **Education** - 학력 및 자격증
7. **Blog** - 최신 블로그 포스트
8. **Contact** - 연락처 및 소셜 링크
