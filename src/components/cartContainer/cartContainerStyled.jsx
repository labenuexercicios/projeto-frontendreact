import styled from "styled-components";

export const CartContainerStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    border: 1px solid black;
    background-color: #ffffff;
    min-height: 90vh;

  
`
export const CartEnvelopedStyled = styled.div`
    
`

export const ButtonCartStyled = styled.button`
     width: 190px;
    background-image: linear-gradient(to bottom, #0055ff, #ffffff, #0055ff);
    box-shadow: 0px 0px 7px rgb(5, 0, 47);
    border: none;
    height: calc(0.7vw + 1.5em);
    padding: 7px;
    border-radius: 0.9rem;
    color: black;
    font-size: calc(0.25vw + 0.9em);
`