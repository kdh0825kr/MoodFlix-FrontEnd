import React, { useEffect, useState } from 'react';
import './KakaoLogin.css';

const KakaoLogin = ({ onLoginSuccess, onLoginError }) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // 카카오 SDK 초기화
    if (window.Kakao) {
      if (!window.Kakao.isInitialized()) {
        const kakaoKey = process.env.REACT_APP_KAKAO_JAVASCRIPT_KEY;
        if (!kakaoKey) {
          // 개발 편의를 위해 콘솔 경고를 남기고 조기 종료
          console.warn('REACT_APP_KAKAO_JAVASCRIPT_KEY 환경변수가 설정되지 않았습니다.');
          return;
        }
        window.Kakao.init(kakaoKey);
      }
    }
  }, []);

  const handleKakaoLogin = async () => {
    if (!window.Kakao) {
      const error = '카카오 SDK를 불러올 수 없습니다.';
      onLoginError?.(error);
      return;
    }

    try {
      setIsLoading(true);
      
      // 카카오 로그인 실행
      const authObj = await new Promise((resolve, reject) => {
        window.Kakao.Auth.login({
          success: resolve,
          fail: reject
        });
      });

      console.log('카카오 로그인 성공:', authObj);
      
      // 카카오 사용자 정보 가져오기
      const userInfo = await getKakaoUserInfo(authObj.access_token);
      
      // 로그인 성공 콜백 호출
      if (onLoginSuccess) {
        onLoginSuccess({
          kakaoAccessToken: authObj.access_token,
          userInfo
        });
      }
      
    } catch (error) {
      console.error('카카오 로그인 실패:', error);
      const errorMessage = '카카오 로그인에 실패했습니다.';
      onLoginError?.(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const getKakaoUserInfo = (accessToken) => {
    return new Promise((resolve, reject) => {
      if (!window.Kakao) {
        reject(new Error('카카오 SDK를 불러올 수 없습니다.'));
        return;
      }

      window.Kakao.Auth.setAccessToken(accessToken);
      
      window.Kakao.API.request({
        url: '/v2/user/me',
        success: function(response) {
          console.log('카카오 사용자 정보:', response);
          
          // 사용자 정보를 가공
          const userInfo = {
            userId: response.id,
            name: response.properties.nickname,
            email: response.kakao_account.email,
            profileImage: response.properties.profile_image,
            provider: 'kakao'
          };
          
          resolve(userInfo);
        },
        fail: function(error) {
          console.error('카카오 사용자 정보 조회 실패:', error);
          reject(new Error('사용자 정보를 가져올 수 없습니다.'));
        }
      });
    });
  };

  return (
    <div className="kakao-login-container">
      <button 
        className="kakao-login-button"
        onClick={handleKakaoLogin}
        disabled={isLoading}
        aria-label="카카오로 로그인"
      >
        <span className="kakao-icon">🎯</span>
        <span className="kakao-text">
          {isLoading ? '로그인 중...' : '카카오로 로그인'}
        </span>
      </button>
    </div>
  );
};

export default KakaoLogin;
