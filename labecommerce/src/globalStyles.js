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

`;
//deixa em colunas Filter/|Product/Cart

export const PageStyle = styled.div`
    display:grid;
    grid-template-columns: 20% 60% 20%;
    gap:5px;
    width:100%;
    padding-top:2rem;
    height:60vh;
   
`;

export const Button = styled.button`
width:10vw;
height:6vh;
border-radius:4px;
align-items:center;
justify-content:center;
`

export default GlobalStyle;