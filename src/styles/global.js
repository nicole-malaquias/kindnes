import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        list-style: none;
        box-sizing: border-box;
        list-style: none;
        
    }

    body{
        background: rgba(166, 184, 243, 0.2);
    }

    :root{
        --white: ##F5F5F5;
        --button01: #7481AA;
        --button02: #8674AA;
        --button03: #DBA5F3
    }
    a{text-decoration: none}

    h1,h2,h3,h4,h5,h6{
        color: #7481aa;
        font-family: Montserrat;
        font-size: 36px;
        font-style: normal;
        font-weight: 400;
        line-height: 44px;
        letter-spacing: 0em;
        text-align: left;
    }
    p{
        font-family: Montserrat;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: left;

    }

    button{
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 23px;

        color: #F5F5F5;
    }
`;
