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

  > img {
    height: 24px;
  }
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

  > div {
    height: 0.5px;
    width: 40px;
    background-color: #505050;
    color: white;
  }
`

export const Nav = styled.nav`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
  gap: 20px;
  color: #707070;
  font-size: 18px;
  /* border: 1px solid white; */

    span{
     cursor: pointer; 
    }

    span:hover{
      color: #BDBDBD;
      transition: color 0.3s ease-in-out;
    }
  `
  export const ImgLupa = styled.img`
    height: 30px;
    padding: 6px;
    cursor: pointer; 
    &:hover{
        filter: brightness(5);
        transition: filter 0.3s ease-in-out;
      }
  `

  export const Carrinho = styled.div`
    height: 30px;
    width: 30px;
    /* border: 1px solid red; */
    display: flex;
    align-items: center;
    position: relative;
    
    div{
      display: ${(props) => props.show};
      justify-content: center;
      position: absolute;
      right: 0;
      top: 0;
      background-color: red;
      height: 15px;
      width: 15px;
      font-size: 11px;
      color: white;
      border-radius: 50%;
      font-weight: bold;
      p{
        position: relative;
        top: -1px;
      }
    }

    img{
      height: 19px;
      cursor: pointer; 
      &:hover{
        filter: brightness(5);
        transition: filter 0.3s ease-in-out;
      }
    }
  `
