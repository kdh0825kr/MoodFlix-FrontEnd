# MoodFlix

당신의 기분에 맞는 완벽한 영화를 찾아주는 AI 기반 영화 추천 서비스입니다.

## 🚀 주요 기능

- **감정 기반 영화 추천**: 현재 기분과 감정 상태에 맞는 영화 추천
- **카카오 로그인**: 간편한 소셜 로그인으로 개인화된 서비스 이용
- **AI 분석**: 사용자의 감정과 선호도를 분석하여 맞춤형 추천
- **반응형 디자인**: 모든 디바이스에서 최적화된 사용자 경험

## 🛠️ 기술 스택

### Frontend
- React 19.1.1
- CSS3 (Custom Styling)
- Axios (HTTP Client)
- JWT Decode (Token Management)

### Backend Integration
- Spring Boot (Java)
- RESTful API
- JWT Authentication
- Kakao OAuth Integration

## 📦 설치 및 실행

### 1. 의존성 설치
```bash
npm install
```

### 2. 환경 변수 설정
프로젝트 루트에 `.env` 파일을 생성하고 다음 내용을 추가하세요:

```env
# 백엔드 API 기본 URL
REACT_APP_API_BASE_URL=http://localhost:8080

# 카카오 JavaScript 키 (선택사항)
REACT_APP_KAKAO_JAVASCRIPT_KEY=your_kakao_javascript_key
```

### 3. 개발 서버 실행
```bash
npm start
```

브라우저에서 [http://localhost:3000](http://localhost:3000)으로 접속하세요.

## 🔧 백엔드 연동

### API 엔드포인트

#### 인증 관련
- `POST /api/auth/kakao` - 카카오 로그인
- `POST /api/auth/refresh` - 토큰 갱신
- `GET /api/user/profile` - 사용자 프로필 조회

#### 영화 추천 관련
- `POST /api/movies/recommendations` - 영화 추천 요청
- `GET /api/movies/search` - 영화 검색

### 인증 플로우

1. **카카오 로그인**: 사용자가 카카오 계정으로 로그인
2. **백엔드 연동**: 프론트엔드에서 백엔드로 카카오 액세스 토큰과 사용자 정보 전송
3. **JWT 토큰 발급**: 백엔드에서 JWT 액세스 토큰과 리프레시 토큰 발급
4. **API 요청**: 이후 모든 API 요청에 JWT 토큰을 Authorization 헤더에 포함
5. **토큰 갱신**: 액세스 토큰 만료 시 리프레시 토큰으로 자동 갱신

### 환경 설정

백엔드 서버가 다른 포트에서 실행 중인 경우, `.env` 파일의 `REACT_APP_API_BASE_URL`을 수정하세요.

## 📱 사용법

1. **홈 화면**: MoodFlix 로고와 함께 환영 메시지 표시
2. **카카오 로그인**: 카카오 계정으로 간편하게 로그인
3. **감정 선택**: 현재 기분에 맞는 감정 선택
4. **기분 설명**: 구체적인 기분 상태를 텍스트로 입력
5. **영화 추천**: AI가 분석하여 맞춤형 영화 추천

## 🔒 보안

- JWT 토큰 기반 인증
- HTTPS 통신 권장
- 토큰 자동 갱신
- 보안된 API 엔드포인트

## 🌐 배포

### 프로덕션 빌드
```bash
npm run build
```

### 환경 변수 설정
프로덕션 환경에서는 적절한 백엔드 API URL을 설정하세요.

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

## 📞 문의

프로젝트에 대한 문의사항이 있으시면 이슈를 생성해 주세요.

---

**MoodFlix** - 당신의 기분에 맞는 영화를 찾아드립니다! 🎬✨
