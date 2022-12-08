import styled from "styled-components";


export const ComprasPrice = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 600;
  text-align: left;
`;
export const Container = styled.div`
padding: 16px;
min-height: 200px;
max-height: 440px;
min-width: 440px;
max-width: 440px;
background-color: black;
border-radius: 12px;
display: flex;
position: relative;
margin: 50px;
color: #ffffff;
`;

export const ComprasName = styled.h1`
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 10px;
`;

export const Compra = styled.img`
width: 100px;
height: 100px;
position: absolute;
top: 10px;
right: 0;
z-index: 2;

`;

export const ComprarButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 10px;
  width: 146px;
  height: 38px;
  background: #ffffff;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  position: absolute;
  bottom: 10px;
  right: 22px;
  z-index: 2;
  color: #000;
`;