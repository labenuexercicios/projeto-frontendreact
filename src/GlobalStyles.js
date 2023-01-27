import React from "react";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle` 
    :root {
        --SkyBlue: 	#87CEEB;
        --Red: #FF0000;
        --Black: #000000;
        --White: #FFFFFF;
        --Grey: #BEBEBE;

        img {
            max-width: 200px;
        }

        h2 {
            color: var(--Black)
        }
    }


h1 {
    font-family : 'Montserrat', cursive;
    Color: var(--White);
}

h2, h3 {
    font-family : 'Montserrat', cursive;
    Color: var(--Black);
}

body {
    font-family : 'Montserrat', cursive;
    background: var(--SkyBlue);
    Color: var(--Black);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

}

`