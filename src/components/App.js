import React, { useState } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";

import LightTheme from 'themes/light'
import DarkTheme from 'themes/dark'

const GlobalStyle = createGlobalStyle`
  body {
      background: ${props => props.theme.bodyBackgroundColor};
      color: ${props => props.theme.bodyFontColor};
      /* min-height: 100vh; */
      margin: 0;
      font-family: 'Kaushan Script';
  }

`

function App() {

  const [theme, setTheme] = useState(LightTheme)

  return (
      <ThemeProvider theme={{...theme, setTheme: () => {
        setTheme(original => original.id === 'light' ? DarkTheme : LightTheme)
      }}}>
        <GlobalStyle/>
        <BrowserRouter>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;