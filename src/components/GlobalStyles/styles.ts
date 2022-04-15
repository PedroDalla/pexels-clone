import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`  
    * {
        box-sizing: border-box;
    }

    body, html {
        font-family: 'Roboto', sans-serif;

        margin: 0;
        border: 0;
        padding: 0;

        height: 100%;
    }
    
    body{
        //overflow-y: hidden;
    }

    #root{
        height: 100%;
    }
`;

