import styled from "styled-components";

export const ContainerFooter = styled.div`
    background-color: black;
    box-sizing: border-box;
    width: 100%;
    padding: 20px 50px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    gap: 5px;
`
export const LinksDireita = styled.div`
display: flex;
align-items: center;
gap: 10px;
    margin-top: 6px;
    max-width: 180px;

    a {
    display: inline-block;
    width: 35px;
    height: 35px;
    background-color: #ffffff;
    border-radius: 100px;
    line-height: 35px;
    margin-left: 3px;
  }

  img{
    width: 35px;
}
`

export const LinksEsquerda = styled.div`
display: flex;
align-items: center;
p{
    display: flex;
    color: #ffffff;
    background-color: none;
    font-size: 12px;
    margin: 0;
}
`
export const LogoFooter = styled.img`
width: 200px;
`

export const LinkScrool = styled.a`
  html {
    scroll-behavior: smooth;
  }
`