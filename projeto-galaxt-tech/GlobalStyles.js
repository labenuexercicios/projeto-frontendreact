import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  body {
     background:  radial-gradient(circle at 50% 50%, #ff66a6 0, #ff5baf 30%,
     #ff52b6 25%, #ff4ab9 40%, #ff43b9 40%, #f23cb5 55%, #d237af 60%, 
     #b434a9 80%, #9833a3 90%, #7e329e 100%, #66339a 100%);
  ::-webkit-scrollbar {
    -webkit-appearance: none;
    display: none;
  }
}
`;