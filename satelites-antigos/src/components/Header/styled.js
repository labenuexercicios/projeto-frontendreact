import styled from "styled-components";

export const ContainerHeader = styled.header`
  background-color: black;
  height: 16vh;
  min-height: 8vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  position: sticky;
  top: 0;
`
export const ContainerLogo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 30%;
`
export const ImgLogo = styled.img`
  height: 24px;
`
export const HeaderContent = styled.div`
  width: 80%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border: 1px solid white; */
`
export const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* border: 1px solid red; */
`
export const Div = styled.div`
  height: 0.5px;
  width: 40px;
  background-color: #505050;
  color: white;
`
export const Nav = styled.nav`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
  gap: 20px;
  color: #505050;
  font-size: 18px;
  /* border: 1px solid white; */

  `
  export const ImgLupa = styled.img`
    height: 18px;
  `

  export const ImgCarrinho = styled.img`
    height: 18px;

  `
