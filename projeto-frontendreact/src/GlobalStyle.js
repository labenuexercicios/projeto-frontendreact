import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    *   {
        padding: 0;
        margin: 0;
        box-sizing:border-box;
    }
    .App {
        display: grid;
        grid-template-columns: 1fr 4fr 1fr;
    }
`;

export default GlobalStyles;