# MoodFlix - 감정 기반 영화 추천 서비스

MoodFlix는 사용자의 현재 감정 상태에 맞춰 영화를 추천해주는 스트리밍 서비스 스타일의 웹 애플리케이션입니다. 직관적인 감정 선택 인터페이스와 모던한 UI를 통해 개인화된 영화 추천 경험을 제공합니다.

## 🎯 주요 기능

### 감정 기반 추천 시스템
- 😊 **감정 선택**: 행복, 슬픔, 신남, 평온, 로맨틱, 불안 등 6가지 감정 카테고리
- 💬 **자유 텍스트 입력**: 더 구체적인 기분 상태를 텍스트로 입력 가능
- 🎬 **개인화된 추천**: 선택된 감정에 맞는 영화 추천

### 사용자 인터페이스
- 🎨 **모던한 디자인**: Netflix 스타일의 다크 테마 기반 UI
- 📱 **반응형 레이아웃**: 모바일, 태블릿, 데스크톱 완벽 지원
- 🎭 **인터랙티브 요소**: 호버 효과, 애니메이션, 시각적 피드백
- 🧭 **직관적 네비게이션**: 사이드바 기반 네비게이션 시스템

### 영화 콘텐츠
- 🎬 **히어로 섹션**: 메인 영화 하이라이트 (Money Heist Part 4)
- 🆕 **이번주 신작**: 최신 영화 컬렉션
- 🔥 **인기작**: 인기 영화 컬렉션
- 🎭 **다양한 장르**: 액션, 드라마, 로맨스, 스릴러 등

## 🛠 기술 스택

### Frontend
- **React 18** - 사용자 인터페이스 구축
- **React Icons** - 아이콘 라이브러리 (FontAwesome, Bootstrap Icons)
- **CSS3** - 모던한 스타일링 (Grid, Flexbox, CSS Variables)
- **반응형 웹 디자인** - 모든 디바이스 지원

### 개발 도구
- **Create React App** - 프로젝트 설정 및 빌드
- **Git** - 버전 관리
- **GitHub** - 코드 저장소 및 협업

## 🚀 설치 및 실행

### 필수 요구사항
- Node.js 16.0.0 이상
- npm 8.0.0 이상

### 설치 과정
```bash
# 저장소 클론
git clone https://github.com/MoodFlix00/MoodFlix-FrontEnd.git
cd MoodFlix-FrontEnd

# 의존성 설치
npm install

# 개발 서버 실행
npm start
```

### 빌드 및 배포
```bash
# 프로덕션 빌드
npm run build

# 테스트 실행
npm test

# 코드 품질 검사
npm run lint
```

## 📁 프로젝트 구조

```
MoodFlix-FrontEnd/
├── public/
│   ├── index.html          # 메인 HTML 파일
│   ├── favicon.ico         # 파비콘
│   ├── logo.svg            # 로고 파일
│   ├── robots.txt          # SEO 최적화
│   └── MoodFlix (Logo).png # 프로젝트 로고
├── src/
│   ├── App.js              # 메인 애플리케이션 컴포넌트
│   ├── App.css             # 애플리케이션 스타일
│   ├── index.js            # 앱 진입점
│   ├── index.css           # 글로벌 스타일
│   └── assets/             # 이미지 및 기타 자산
├── package.json            # 프로젝트 설정 및 의존성
└── README.md               # 프로젝트 문서
```

## 🎨 디자인 시스템

### 색상 팔레트
- **Primary**: 다크 테마 기반 (#0f0f0f, #1a1a1a)
- **Accent**: 감정별 색상 (행복: #FFD700, 슬픔: #87CEEB, 신남: #FF6B6B)
- **Text**: 고대비 가독성 (#ffffff, #cccccc)

### 타이포그래피
- **제목**: 굵은 폰트 웨이트, 큰 사이즈
- **본문**: 가독성 높은 폰트, 적절한 라인 높이
- **버튼**: 명확한 액션 표시

### 레이아웃
- **Grid 시스템**: 반응형 그리드 레이아웃
- **Flexbox**: 유연한 컴포넌트 배치
- **CSS Variables**: 일관된 스타일링

## 🔧 주요 컴포넌트

### 감정 선택 컴포넌트
- 6가지 감정 카테고리 (이모지 아이콘 포함)
- 선택 상태 시각적 피드백
- 반응형 그리드 레이아웃

### 영화 카드 컴포넌트
- 영화 포스터 이미지
- 제목 표시
- 호버 애니메이션 효과

### 네비게이션 컴포넌트
- 사이드바 레이아웃
- 아이콘 기반 네비게이션
- 로고 표시

## 🌐 브라우저 지원

- ✅ Chrome (최신 버전)
- ✅ Firefox (최신 버전)
- ✅ Safari (최신 버전)
- ✅ Edge (최신 버전)
- ✅ 모바일 브라우저 (iOS Safari, Chrome Mobile)

## 📱 반응형 디자인

### 브레이크포인트
- **모바일**: 320px - 768px
- **태블릿**: 768px - 1024px
- **데스크톱**: 1024px 이상

### 적응형 요소
- 유연한 그리드 시스템
- 모바일 최적화 네비게이션
- 터치 친화적 인터페이스

## 🔮 향후 개발 계획

- [ ] **백엔드 연동**: 실제 영화 추천 API 구현
- [ ] **사용자 인증**: 로그인/회원가입 시스템
- [ ] **개인화**: 사용자별 추천 히스토리
- [ ] **검색 기능**: 영화 검색 및 필터링
- [ ] **평가 시스템**: 영화 평점 및 리뷰
- [ ] **소셜 기능**: 친구와 추천 공유

## 🤝 기여하기

1. 이 저장소를 포크합니다
2. 새로운 기능 브랜치를 생성합니다 (`git checkout -b feature/AmazingFeature`)
3. 변경사항을 커밋합니다 (`git commit -m 'Add some AmazingFeature'`)
4. 브랜치에 푸시합니다 (`git push origin feature/AmazingFeature`)
5. Pull Request를 생성합니다

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

## 👥 팀원

- **Frontend Developer**: UI/UX 구현 및 사용자 인터페이스 개발
- **Backend Developer**: API 개발 및 데이터베이스 설계
- **Designer**: 디자인 시스템 및 사용자 경험 설계

## 📞 문의

프로젝트에 대한 문의사항이나 버그 리포트는 [Issues](https://github.com/MoodFlix00/MoodFlix-FrontEnd/issues) 페이지를 통해 제출해주세요.

---

**MoodFlix** - 당신의 감정을 영화로 표현하세요 🎬✨
