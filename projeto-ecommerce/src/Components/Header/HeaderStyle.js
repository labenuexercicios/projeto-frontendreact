import styled from "styled-components";

export const ContainerHeader = styled.div`
    width:100vw;
    height:10vh;
    background-image: url("https://www.mymax.ind.br/wp-content/uploads/2017/07/Topo-Site-Mymax-1-1024x151.jpg");
    background-size: 100vw;
    display: flex;
    flex-direction: row;
    justify-content:center;  
`
export const HeaderText = styled.h1`
    font-family: 'Gajraj One', cursive;
    padding-top: 1vh ;
    color: #363636;
    padding-right: 55vh;
    
`
export const ListHeader = styled.ul`
    display: flex;
    flex-direction:row;
    list-style-type: none;
    text-decoration-line: none;
    font-size: 0.8rem;
    column-gap: 1vw;
    align-items: center;
    cursor: pointer;
`