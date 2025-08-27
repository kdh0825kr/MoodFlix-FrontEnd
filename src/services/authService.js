import axios from 'axios';
import { jwtDecode } from "jwt-decode";
import { API_BASE_URL, API_ENDPOINTS, getAuthHeaders, handleApiResponse, handleApiError } from '../constants/api';

// axios 인스턴스 생성
const authApi = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

// 요청 인터셉터 - 인증 헤더 추가
authApi.interceptors.request.use(
  (config) => {
    const headers = getAuthHeaders();
    if (headers.Authorization) {
      config.headers.Authorization = headers.Authorization;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 응답 인터셉터 - 에러 처리
authApi.interceptors.response.use(
  (response) => response,
  (error) => {
    // handleApiError는 부수효과(토큰 제거/리다이렉트)만 수행할 수 있으므로,
    // 반드시 호출자에게 에러를 거부(Reject)로 전파합니다.
    handleApiError(error)
    return Promise.reject(error);
  }
);

// 카카오 로그인 처리
export const kakaoLogin = async (kakaoAccessToken, userInfo) => {
  try {
    const response = await authApi.post(API_ENDPOINTS.KAKAO_LOGIN, {
      kakaoAccessToken,
      userInfo: {
        kakaoId: userInfo.userId,
        nickname: userInfo.name,
        email: userInfo.email,
        profileImage: userInfo.profileImage,
      }
    });
    
    const data = handleApiResponse(response);
    
    // 토큰 저장
    if (data.accessToken) {
      localStorage.setItem('accessToken', data.accessToken);
      if (data.refreshToken) {
        localStorage.setItem('refreshToken', data.refreshToken);
      }
    }
    
    return data;
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('카카오 로그인 API 호출 실패:', error?.response?.status, error?.message);
    }
    throw error;
  }
};

// 토큰 갱신
export const refreshToken = async () => {
  try {
    const refreshToken = localStorage.getItem('refreshToken');
    if (!refreshToken) {
      throw new Error('리프레시 토큰이 없습니다.');
    }
    
    const response = await authApi.post(API_ENDPOINTS.REFRESH_TOKEN, {
      refreshToken
    });
    
    const data = handleApiResponse(response);
    
    if (data.accessToken) {
      localStorage.setItem('accessToken', data.accessToken);
      if (data.refreshToken) {
        localStorage.setItem('refreshToken', data.refreshToken);
      }
    }
    
    return data;
  } catch (error) {
    if (process.env.MODE_ENV !== 'production') {
      console.error('토큰 갱신 실패:', error?.response?.status, error?.message);
    }
    throw error;
  }
};

// 사용자 프로필 조회
export const getUserProfile = async () => {
  try {
    const response = await authApi.get(API_ENDPOINTS.USER_PROFILE);
    return handleApiResponse(response);
  } catch (error) {
    if (process.env.MODE_ENV !== 'production') {
      console.error('사용자 프로필 조회 실패:', error?.response?.status, error?.message);
    }
    throw error;
  }
};

// 로그아웃
export const logout = () => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
  localStorage.removeItem('userInfo');
  
  // 카카오 로그아웃
  if (window.Kakao && window.Kakao.Auth.getAccessToken()) {
    window.Kakao.Auth.logout();
  }
};

// 토큰 유효성 검사
export const isTokenValid = () => {
  const token = localStorage.getItem('accessToken');
  if (!token) return false;
  
  try {
    // jwt-decode는 base64url 처리 및 안전 파싱을 제공합니다.
    const { exp } = jwtDecode(token);
    const currentTime = Math.floor(Date.now() / 1000);
    return typeof exp === 'number' && exp > currentTime;
  } catch (error) {
    console.error('토큰 검증 실패:', error);
    return false;
  }
};
