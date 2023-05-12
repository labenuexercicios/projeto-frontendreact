import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
    :root{
        --white: #ffffff;
        --black: #000000;
        --color1: #669f84;
        --color2: #c6b68c;
        --color3: #d27878;
        --color4: #5f3d73;
        --color5: #2a1731;
        --color6: #1e1e43;
        --color7: #0c0a1c;
    }

    *{
        margin: 0;
        padding: 0;
    }

    body{
        font-family:'Poppins';
        background: var(--color2);
        color: var(--white);
    }
`