import styled from "styled-components";


export const CardCtn = styled.div`
    display: grid;
    perspective: 700px;
    :hover{
    transform: rotateY(180deg);
    }
`

export const CardFlip = styled.div`
    display: grid;
    grid-template: 1fr / 1fr;
    grid-template-areas: "frontAndBack";
    transform-style: preserve-3d;
    transition: all 0.7s ease;

`

export const CardContent = styled.div`
    backface-visibility: hidden;
    transform-style: preserve-3d;
    padding: 1rem;
    text-align: center;
    vertical-align: center;
`

export const CardFront = styled.div`
grid-area: frontAndBack;
`

export const CardBack = styled.div`

    grid-area: frontAndBack;
    transform: rotateY(-180deg);
`


