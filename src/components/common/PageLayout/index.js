import React from "react";

import { Header } from "../Header";

import { Content } from "./style";

export const PageLayout = ({children}) => {
    return(
        <>
            <Header/>
            <Content>{children}</Content>
        </>
    )
}