import React from "react";

import { SignupBox } from "./components/SignupBox";

import './Signup.css';
import { Signup } from "..";
import { RegisterTopNav, TopNav } from "../Common/components/TopNav/TopNav";
import { RegisterBannerBox } from "../Common/components/RegisterBannerBox/RegitsterBannerBox";
import { BottomNav } from "../Common/components/BottomNav/BottomNav";

const SignupPresenter = ({
    
}) => {
    return(
        <div>
            <TopNav
                title="회원가입"
            />
            <RegisterBannerBox />
            <SignupBox />
            <BottomNav />
        </div>
    )
}

export default SignupPresenter;