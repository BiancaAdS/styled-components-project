import React, { useState } from "react";
import { PasswordInputStyled, PasswordInputWrapper, ToggleButton } from "./style";

export const PasswordInput = (props) => {

    const [showPassword, setShowPassword] = useState(true) 

    return (
        <>
            <PasswordInputWrapper>
                <PasswordInputStyled {...props}/>
                <ToggleButton onClick={() => setShowPassword(original => !original)}>{showPassword ? 'Hide' :  'Show'}</ToggleButton>
            </PasswordInputWrapper>
            <div>
                {showPassword ? props.value : ''}
            </div>
        </>
    )
}