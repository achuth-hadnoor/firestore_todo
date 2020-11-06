import React, { useState } from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;  
    -webkit-touch-callout: none !important;
    font-weight: 500;
    height: 100%;
    overflow: hidden !important;
}
#__next{
    display: flex;
    flex-direction: column;
    height: 100%;
    margin:auto;
}
@media (min-width: 1450px){
    #__next {
        max-width: 1450px;
        padding: 20px;
    }
}

`
// background:rgba(0,0,0,.4);
// background-image: url("https://images.unsplash.com/photo-1547185942-2b5661136b1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80");

const Apptheme = {
    colors: {
        primary: '#0070f3',
    },
}

const ThemeWrapper = ({ children }) => {

    const [theme, setTheme] = useState(Apptheme);
    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={theme}> 
                    {children} 
            </ThemeProvider>
        </>
    )
} 

export default ThemeWrapper;