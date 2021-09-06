import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 20px;
    font-family: "Montserrat", sans-serif;
    
  }
  
   @media (min-width: ${({ theme }) => theme.pc_min}) {
      padding-left: 30px;
    }
   
   @media (max-width: ${({ theme }) => theme.tablet_max}) {
      padding-left: 0px;
    }
  
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    text-rendering: optimizeLegibility;
    font-family: "Montserrat", sans-serif;
    text-align: left;
    font-size: 16px;
  }
  h1 {
    font-size: 30px;
    text-align: left;
    margin-top: 3rem;
    margin-bottom: 2rem;
    line-height: 35px; 
  }
  
  ul {
    list-style-type: none;
    line-height: 35px; 
    display:inline;
}

  img {
    width: 10rem;
  }
  
  a {
    color: ${({ theme }) => theme.href};
    text-decoration: none;
  }
`
