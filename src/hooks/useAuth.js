import { useState, useEffect, useCallback } from 'react';
import { kakaoLogin, logout as authLogout, getUserProfile, isTokenValid, refreshToken } from '../services/authService';

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // 초기 인증 상태 확인
  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        setIsLoading(true);
        
        if (isTokenValid()) {
          // 토큰이 유효하면 사용자 프로필 조회
          const userProfile = await getUserProfile();
          setUser(userProfile);
          setIsAuthenticated(true);
        } else {
          // 토큰이 유효하지 않으면 로그아웃 상태로 설정
          setUser(null);
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error('인증 상태 확인 실패:', error);
        setUser(null);
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuthStatus();
  }, []);

  // 카카오 로그인 처리
  const login = useCallback(async (kakaoAccessToken, kakaoUserInfo) => {
    try {
      setIsLoading(true);
      setError(null);
      
      // 백엔드로 카카오 로그인 요청
      const loginResult = await kakaoLogin(kakaoAccessToken, kakaoUserInfo);
      
      // 로그인 성공 시 사용자 정보 설정
      setUser(loginResult.user || kakaoUserInfo);
      setIsAuthenticated(true);
      
      return loginResult;
    } catch (error) {
      console.error('로그인 실패:', error);
      setError(error.message || '로그인에 실패했습니다.');
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, []);

  // 로그아웃 처리
  const logout = useCallback(() => {
    try {
      authLogout();
      setUser(null);
      setIsAuthenticated(false);
      setError(null);
    } catch (error) {
      console.error('로그아웃 실패:', error);
      setError(error.message || '로그아웃에 실패했습니다.');
    }
  }, []);

  // 토큰 갱신
  const refreshAuthToken = useCallback(async () => {
    try {
      const result = await refreshToken();
      if (result.user) {
        setUser(result.user);
      }
      return result;
    } catch (error) {
      console.error('토큰 갱신 실패:', error);
      // 토큰 갱신 실패 시 로그아웃
      logout();
      throw error;
    }
  }, [logout]);

  // 에러 초기화
  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return {
    user,
    isAuthenticated,
    isLoading,
    error,
    login,
    logout,
    refreshAuthToken,
    clearError,
  };
};
