import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    h1{
      font-size: 20px;
      font-family: Arial, Helvetica, sans-serif;
    }

    body{
      background-color:black;
      background: #fff url("https://wallpaperaccess.com/full/2401680.jpg") center center/cover no-repeat fixed;
    }
`;

export default GlobalStyle;
