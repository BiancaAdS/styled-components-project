
import styled from "styled-components";

import { Input } from "../Input";

export const PasswordInputWrapper = styled.div`
    display: flex;

    ~ div {
        margin-bottom: 8px;
    }

`

export const PasswordInputStyled = styled(Input).attrs(() =>({
    type: 'password',
    placeholder: 'Password'
}))`
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
`
export const ToggleButton = styled.div`
    height: 40px;
    border: 1px solid #ccc;
    box-sizing: border-box;
    font-size: 0.9em;
    display: flex;
    padding: 8px;
    border-left: 0;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    background: white;
    user-select: none;
    color: black;
    font-weight: bold;
    cursor: pointer;
`