import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
    background-color: #f9f9f9;
    font-family: 'Nanum Myeongjo', serif;
    
    button {
    font-family: inherit;
    font-size: 1em;
    margin: 2px;
    cursor: pointer;
  }
}`;
