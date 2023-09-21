import styled from "styled-components";


export const ContainerHeader = styled.div`
    width:100vw;
    height:10vh;
    background-image: url("https://cdn.pixabay.com/photo/2013/07/18/10/55/outer-space-163458_640.jpg");
    background-size: 100vw;
    display: flex;
    flex-direction: row;
    justify-content:center;  
`
export const HeaderText = styled.h1`
    font-family: 'Gajraj One', cursive;
    padding-top: 1vh ;
    color: white;
    padding-right: 55vh;
    
`
export const ListHeader = styled.ul`
    display: flex;
    flex-direction:row;
    list-style-type: none;
    text-decoration-line: none;
    font-size: 0.8rem;
    column-gap: 1vw;
    color: white;
    align-items: center;
    cursor: pointer;
`