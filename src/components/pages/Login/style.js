import styled from 'styled-components'
import { Button } from "components/common";

export const Form = styled.form`
    width: 100%;
    max-width: 400px;
    background: white;
    border: 1px solid #eee;
    padding: 16px;
    box-sizing: border-box;
    color: black;

    .alt-text {
        text-align: center;
        margin: 10px 0;
    }

    >${Button}:first-of-type{
        margin-top: 40px;
    }
`
