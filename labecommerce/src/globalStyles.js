import {createGlobalStyle} from 'styled-components';
import styled from 'styled-components'


const GlobalStyle = createGlobalStyle`
    *{
      margin:0;
      padding: 0;
      box-sizing:border-box;
      
      ul {
      list-style: none;  
      }
      
    }
    body{
      background-image: url(https://img.freepik.com/fotos-premium/fundo-de-particula-de-poeira-estrela-abstrata_110488-460.jpg)
    }

`;
//deixa em colunas Filter/|Product/Cart



// export const Button = styled.button`
// width:10vw;
// height:6vh;
// border-radius:4px;
// align-items:center;
// justify-content:center;
// `

export default GlobalStyle;