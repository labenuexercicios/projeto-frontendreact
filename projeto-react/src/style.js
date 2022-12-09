import styled from "styled-components";
import image1 from "./img/image1.jpg"

export const LayoutApp = styled.div`
    display: grid;
    grid-template-rows: 15vh 70vh;
    gap: 20px;
  
`
export const Footer = styled.footer`




`
export const Header = styled.header`
    display: flex;
    width: 100vw;
    height: 100%;
    background:url(${image1});
    justify-content: center;
    align-items: center;
    
    h1 {
        color: white;
    }`

export const SecaoLoja = styled.div`
    display: grid;
    grid-template-columns: 20% 50% 28%;
    padding: 15px;
    height: 100%;
    gap: 10px;
    
   
`

export const SecaoPrincipal = styled.div`
    grid-column-start: 2;
    align-items: center;
    justify-items: center;
    display: flex;
    flex-wrap: wrap;
    padding: 5px;
    gap: 24px;
    color: black;
    
    
`

export const Parametros = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    
    select {
        border-radius: 10px;
        padding: 3px;
        margin-left: 5px;
        cursor: pointer;
    }`

export const DivCarrinho = styled.div`
border: 1px solid black;
height: 200px;
padding: 10px;


`