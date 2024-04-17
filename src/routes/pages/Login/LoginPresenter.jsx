import React from "react";

import { LoginBox } from "./components/LoginBox";
import { TopNav } from "../Common/components/TopNav/TopNav";
import { BottomNav } from "../Common/components/BottomNav/BottomNav";
import { RegisterBannerBox } from "../Common/components/RegisterBannerBox/RegitsterBannerBox";

import './Login.css';
import { Login } from "..";


const LoginPresenter = () => {
    return(
        <div className="login-container">
            <TopNav 
                title= "로그인"
            />
            <RegisterBannerBox />
            <LoginBox />
            <BottomNav />    
        </div>
    )
}

export default LoginPresenter;