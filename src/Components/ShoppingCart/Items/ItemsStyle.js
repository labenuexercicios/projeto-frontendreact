import styled from "styled-components";

export const EstilizacaoGeralItens = styled.ul`
  color: white;
  /* display: flex; */
  flex-direction:column;
  /* justify-content: space-between; */




  li {
    /* justify-content: space-around; */
    padding: 1.1px;
    list-style: none;

  }

  button {
    /* display:flex; */
  /* flex-direction:column; */

    width: 30%;
    height: 50%;
    background-color: red;
    color: white;
    border-radius: 8px;
    cursor: pointer;
    background-image: linear-gradient(to right, var(--6), var(--4));
    float: right;

  }

  span {
    font-size:1.2em; 
    width: 50%;
    height: 50%;
    

  }
`;
