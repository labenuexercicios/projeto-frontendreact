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
//      background-color: #333;
//      color: #fff;
//      border: none;
//      padding: 10px 20px;
     

// :hover{
//     cursor: pointer;
// }
// `;
export default GlobalStyle;