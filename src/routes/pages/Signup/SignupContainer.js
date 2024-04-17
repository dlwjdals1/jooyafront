import React, { useState } from "react";

import SignupPresenter from "./SignupPresenter";

const SignupContainer = () => {

    const [text, setText] = useState('')
    
    return (
        <div className="signup-container">
            <SignupPresenter
                text={text}
            />
        </div>
    )
}

export default SignupContainer;