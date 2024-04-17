import React from "react";

import './LoginBox.css';

import { default as MainImage } from '../../../../image/jooyajooya.png'

export const LoginBox = ({

}) => {
    return(
        <div className="Login-Box-container">
            <div className="login-banner">
                <img src={MainImage}/>
            </div>
            <div className="Login">    
                <input type="text" placeholder="아이디(이메일)을 입력해주세요."/>
                <span className="highlight" >이메일 형식을 확인하세요</span>
                <input type="password" placeholder="비밀번호를 입력해주세요."/>
                <button>로그인</button>
            </div>
            <div className="find-id">
                <a href="searchId">아이디 찾기</a> |
                <a href="searchPwd">비밀번호 찾기</a> |
                <a href="singUp">회원가입</a>
            </div>
            <div className="simplelogin">
                <strong>간편 로그인</strong>
                <button>카카오계정으로 로그인</button>
                <button>네이버계정으로 로그인</button>
            </div>
        </div>
    )
}