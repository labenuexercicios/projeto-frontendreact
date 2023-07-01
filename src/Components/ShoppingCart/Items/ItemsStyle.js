import styled from "styled-components";

export const EstilizacaoGeralItens = styled.ul`
  color: white;
  flex-direction:column;
  padding-right:3%;


  li {
    margin-bottom: 8px;
    list-style: none;


  }

  button {
   padding:0;
   margin:0;
    width: 30px;
    height: 27px;
     border:1px solid red;
    cursor: pointer;
    float: right;
    background-color:transparent ;

    img{
    width: 20px;
    height: 20px; 
    }
  }

  span {
    font-size:1.2em; 
    width: 50%;
    height: 50%;
    
  }
`;

