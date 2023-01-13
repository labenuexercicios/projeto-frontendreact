import styled from "styled-components";

export const ContainerPag = styled.div`
  color: white;
  `;

export const Header = styled.header`
  gap: 15px;
  padding: 5px;
  padding-bottom: 25px;
  background-color: #1d1e1b;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  position: sticky;
	top: 0;
  z-index: 1;
 `;

 export const NavBar = styled.nav`
 display: flex;
 `

export const H1 = styled.h1`
  font-size: 30px;
  margin-left: 10px;
  background-image: linear-gradient(to bottom, #2a5e3b, #62de8b, #a8e3bc);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: black;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
`;

export const ContainerButton = styled.div`
  
  `;

export const ButtonCart = styled.button`
  margin: 10px;
  padding: 5px;
  border-radius: 100px;
  background-color: white;
  :hover {
    background-color: #45782f;
    cursor: pointer;
  }
  img {
    width: 30px;
  }
`;

export const Footer = styled.footer`
height: 30px;
width: 100%;
background-color: #1d1e1b;
display: grid;
position: absolute;
`
