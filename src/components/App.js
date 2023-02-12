import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";

import { createGlobalStyle, ThemeProvider } from "styled-components";

import { RoutesApp } from "routes";

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
           <RoutesApp/>
        </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;
