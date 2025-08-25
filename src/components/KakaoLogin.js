import React, { useEffect } from 'react';
import './KakaoLogin.css';

const KakaoLogin = ({ onLoginSuccess }) => {
  useEffect(() => {
    // 카카오 SDK 초기화
    if (window.Kakao) {
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init('affe6164314ed67808f7ac9704c7e236');
      }
    }
  }, []);

  const handleKakaoLogin = () => {
    if (window.Kakao) {
      window.Kakao.Auth.login({
        success: function(authObj) {
          console.log('카카오 로그인 성공:', authObj);
          
          // 카카오 사용자 정보 가져오기
          getKakaoUserInfo(authObj.access_token);
        },
        fail: function(err) {
          console.error('카카오 로그인 실패:', err);
          alert('카카오 로그인에 실패했습니다.');
        }
      });
    } else {
      alert('카카오 SDK를 불러올 수 없습니다.');
    }
  };

  const getKakaoUserInfo = (accessToken) => {
    if (window.Kakao) {
      window.Kakao.Auth.setAccessToken(accessToken);
      
      window.Kakao.API.request({
        url: '/v2/user/me',
        success: function(response) {
          console.log('카카오 사용자 정보:', response);
          
          // 사용자 정보를 가공하여 부모 컴포넌트에 전달
          const userInfo = {
            userId: response.id,
            name: response.properties.nickname,
            email: response.kakao_account.email,
            profileImage: response.properties.profile_image,
            provider: 'kakao',
            accessToken: accessToken
          };
          
          if (onLoginSuccess) {
            onLoginSuccess(userInfo);
          }
        },
        fail: function(error) {
          console.error('카카오 사용자 정보 조회 실패:', error);
          alert('사용자 정보를 가져올 수 없습니다.');
        }
      });
    }
  };

  return (
    <div className="kakao-login-container">
      <button 
        className="kakao-login-button"
        onClick={handleKakaoLogin}
        aria-label="카카오로 로그인"
      >
        <span className="kakao-icon">🎯</span>
        <span className="kakao-text">카카오로 로그인</span>
      </button>
    </div>
  );
};

export default KakaoLogin;
