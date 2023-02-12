import React, { useState, useContext } from "react";
import { useLocation } from "react-router-dom";

import { Toggle } from "../Toggle";

import { ThemeContext } from "styled-components";
import { HeaderWrapper, Menu, MobileMenuIcon, StyledLink } from "./style";


export const Header = () => {

    const { pathname } = useLocation()
    const [menuOpen, setMenuOpen] = useState(false)
    const { id , setTheme } = useContext(ThemeContext)

    return (
        <HeaderWrapper>
            <MobileMenuIcon onClick={() => setMenuOpen(original => !original)}>
                <div/>
                <div/>
                <div/>
            </MobileMenuIcon>
            <Menu open={menuOpen}>
                <StyledLink to='/' isActive={pathname === '/'}>Home</StyledLink>
                <StyledLink to='/login' isActive={pathname === '/login'}>Login</StyledLink>
                <Toggle isActive={id === 'dark'} onToggle={setTheme}/>
            </Menu>
        </HeaderWrapper>
    )
}