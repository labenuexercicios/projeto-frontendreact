import styled from "styled-components";

export const CarrinhoStyled = styled.aside`
//border: 1px solid black;
align-items: center;
font-size: 30px;
`

export const PStyle = styled.p
`
color: white;
font-size: 20px;
padding-left: 5px;
padding-top: 10px;
`

export const FixaDireita = styled.div
`
position: fixed;

`

export const ListaContainer = styled.div`
  width: 280px;
  display: flex;
  flex-direction: column;
  //overflow: auto;
`;


export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  font-size: 12px;
  border: 1px solid black;
  border-radius: 10px;
  padding: 6px 8px;
  background-color: white;
  transition: background-color 0.3s;
  &:hover {
    background-color: lightblue;
  }
`;

export const ItemTotal = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  font-size: 18px;
  border: 1px solid black;
  border-radius: 10px;
  padding: 6px 8px;
  background-color: white;
  transition: background-color 0.3s;
  &:hover {
    background-color: lightblue;
  }
`;

export const RemoveButton = styled.button`
  padding: 8px 8px 8px 8px;
  background-color: #de2f45;
  border: none;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
`;