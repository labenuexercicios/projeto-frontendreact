import styled from "styled-components";

export const Container = styled.div`
  width: 25vh;
  min-height:100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align:center;
  justify-content: top;
  background-color: #014960;
  border:  5px solid #F7EB3F;
  border-radius: 10px;
  color: #F7EB3F;
 
`;



export const Button = styled.button`
background-color: #F7EB3F;
border-radius: 30px;
color: #014960;
width: 1.5em;
height: 1.5em;
cursor: pointer;
:hover {
    transform: scale(1.2);
    opacity: 90%;
}
 `;



export const Button1 = styled.button`
  background-color: lightblue;
  cursor: pointer;
`

export const Img = styled.img`
  width: 60px;
  height: 40px;
  border-radius:10px;
  
`;

// total
export const Div = styled.div `
background-color: rgba(9, 145, 187, 0.5);
text-align: center;
border:  1px solid #0991bb;
margin-top:10px;
margin-bottom: 5px;
`

// cáculo de cada sat
export const Div1 = styled.div `
background-color: rgba(9, 145, 187, 0.5);
text-align: center;
border:  1px solid #0991bb;
border-radius: 5px;

`

export const Hr = styled.hr `
border: 1px dashed ;
`

// de carrinho vazio
export const H2 = styled.h2`
text-align: center;
font-family: 'Courier';
font-size: 16px;


`;