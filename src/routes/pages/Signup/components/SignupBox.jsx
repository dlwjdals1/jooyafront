import React from "react";

import './SignupBox.css';

export const SignupBox = ({

}) => {
    return(
        <div className="signup-container">
            <p className="info">
                아이디와 비밀번호를 입력해 회원이 되시면 <br/>
                다양한 서비스를 이용할 수 있습니다.
            </p>
            <div className="signup-profile">
                <h4>아이디(이메일) *</h4>
                    <div className="register-input-id">
                        <input className="input-id" type="text" placeholder="아이디(이메일)을 입력해주세요"/>
                        <button title="check">중복확인</button>
                    </div>
                <p className="alram">이메일 형식이 맞지 않습니다 </p>
                <h4>비밀번호 *</h4>
                <input type="password" placeholder="비밀번호를 입력해주세요" />
                <p className="font-gray">비밀번호는 8자 이상, 특수문자를 하나 이상 포함해야 합니다</p>
                <h4>비밀번호 확인 *</h4>
                <input type="password" placeholder="비밀번호를 한번 더 입력해주세요" />
                <p className="alram">비밀번호를 다시 입력해주세요 </p>
                <h4>이름 *</h4>
                <p className="alram">필수 항목 입니다</p>
                <input type="text" placeholder="이름을 입력해주세요" />
                <h4>예명 *</h4>
                <input type="text" placeholder="예명을 입력해주세요" />
                <h4>핸드폰 번호 *</h4>
                    <div className="sent-code">
                        <input className="code" type="number" placeholder="핸드폰 번호를 입력해주세요" />
                        <button title="sent">인증번호 전송</button>
                    </div>
                <p className="alram">필수 항목 입니다</p>
                <p className="font-gray">입력하신 번호로 상담이 진행되오니, 정확한 번호를 입력해주세요</p>
            </div>
        </div>
    )
}

