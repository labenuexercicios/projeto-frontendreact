import styled from "styled-components";

export const ProductCardStyle = styled.main`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 1rem;
`

export const ContainerCard = styled.div`
    display: flex;
    gap: .5rem;
    flex-direction: column;
    width: 18rem;
    height: 25rem;
    border: 2px solid rgba(255, 255, 255, 0.87);

    /* :hover{
        flex-direction: row;
        width: 50rem;
        height: 22rem;
    } */
`

export const Image = styled.img`

`

export const Button = styled.button`
    align-self: center;
    max-width: 10rem;
    border-radius: 8px;
`

export const Paragraph = styled.p`
    padding-left: .5rem;
    
`