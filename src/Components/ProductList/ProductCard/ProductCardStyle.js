import styled from "styled-components";

export const GeralStyle = styled.article`
  flex-direction: column;
  padding-left: 4%;
  padding-top: 10%;
`;

export const CardImagem = styled.img`
  width: 15vw;
  border: 4px solid var(--2);
  border-radius: 40%;
`;
export const ButtonCard = styled.button`
  background-color: var(--4);
  width: 80%;
  text-align:center;
  align-items:center;
  height: 5vh;
  border-radius: 8px;
  font-weight:bold;
  color:white;
  &:disabled{
    opacity: 0.6;
  }

`;

export const NomeProduto = styled.h3`
  color: var(--8);
  
`;

export const PrecoProdutos = styled.h3`
  color: red;
`;

export const TamanhoProdutos = styled.select`
height:4vh;
 background-image: linear-gradient(to right, var(--6), var(--4));
  background-color: var(--4);
  color:white;
  border-radius: 8px;

  /* color: var(--8); */

`
