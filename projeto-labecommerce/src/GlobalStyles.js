import { createGlobalStyle } from 'styled-components'


const GlobalStyles = createGlobalStyle`
    :root {
        --primary-font-color: #ECEEF3;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Orbitron';
    }
    input, select {
        color: black;
    }
    
  



`
export default GlobalStyles