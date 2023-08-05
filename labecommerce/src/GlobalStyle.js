import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    main {
        display: grid;
        grid-template-columns: 1fr 3fr 1fr;
    }


    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`