import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
    font-size: 15px;
    font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;  
    }

    #root {
        padding: 16px;
        max-width: 1200px;
        margin: 0 auto;
    }

    button {
        :hover {
            cursor: pointer;
            filter: brightness(0.95);
        }

        :active {
            filter: brightness(0.85);
        }
    }
    body{
        background-size: 

    }
`