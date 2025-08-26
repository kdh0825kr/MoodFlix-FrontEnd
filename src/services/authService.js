import axios from 'axios';
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
  (error) => handleApiError(error)
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
    console.error('카카오 로그인 API 호출 실패:', error);
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
    console.error('토큰 갱신 실패:', error);
    throw error;
  }
};

// 사용자 프로필 조회
export const getUserProfile = async () => {
  try {
    const response = await authApi.get(API_ENDPOINTS.USER_PROFILE);
    return handleApiResponse(response);
  } catch (error) {
    console.error('사용자 프로필 조회 실패:', error);
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
    // JWT 토큰 만료 시간 확인 (간단한 검증)
    const payload = JSON.parse(atob(token.split('.')[1]));
    const currentTime = Date.now() / 1000;
    
    return payload.exp > currentTime;
  } catch (error) {
    console.error('토큰 검증 실패:', error);
    return false;
  }
};
