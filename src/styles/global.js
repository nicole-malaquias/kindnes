import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
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
`;
