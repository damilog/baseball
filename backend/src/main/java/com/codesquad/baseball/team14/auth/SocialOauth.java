package com.codesquad.baseball.team14.auth;

public interface SocialOauth {
    String getOauthRedirectURL();


    String requestAccessToken(String code);

    default SocialLoginType type() {
        if (this instanceof FacebookOauth) {
            return SocialLoginType.FACEBOOK;
        } else if (this instanceof GoogleOauth) {
            return SocialLoginType.GOOGLE;
        } else if (this instanceof NaverOauth) {
            return SocialLoginType.NAVER;
        } else if (this instanceof KakaoOauth) {
            return SocialLoginType.KAKAO;
        } else {
            return null;
        }
    }

}
