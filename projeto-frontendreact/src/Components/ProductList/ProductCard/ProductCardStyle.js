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
    width: 15rem;
    height: 22rem;
    border: 2px solid rgba(255, 255, 255, 0.87);
`

export const Image = styled.img`
    max-width: 256px;
    max-height: 256px;
`

export const Button = styled.button`
    align-self: center;
    max-width: 10rem;
`

export const Paragraph = styled.p`
    padding-left: .5rem;
    
`