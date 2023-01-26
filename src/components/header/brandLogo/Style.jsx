import styled from "styled-components"

export const ContainerStyled = styled.div` 
    width: 35%; 
    display: flex;
    justify-content: flex-end;  
`
export const LogoImgStyled = styled.img`
    width: 150px;
    height: 150px;
    grid-column: 1;
    grid-row: 1;
    display: flex;   
    justify-self: center;
    border-radius: 50%;   
`
export const LogoTextStyled = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
    grid-column: 1;
    grid-row: 1;
`
export const MainLogoTextStyled = styled.label`
    color: white;
    font-size: x-large;
    font-style: italic;
    font-weight: bold;
`
export const SecondaryLogoTextStyled = styled.label`
    color: white;
    font-size: medium;
`
export const InnerContainerStyled = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    width: 190px;
    justify-content: center;
    align-items: center;
    text-align: center;
`