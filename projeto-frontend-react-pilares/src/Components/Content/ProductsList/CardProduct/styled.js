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
    padding: 1rem;
    height: 90%;
    text-align:  flex-start;
    vertical-align: center;
`

export const CardFront = styled.div`
grid-area: frontAndBack;
`

export const SizeBox = styled.span`
width: 30px;
height: 15px; 
border: 2px solid white;
border-color: ${(props) => props.size == 0 ? "var(--red-900)" : "blue" };
padding: 0.8px;
margin: 10px 5px ;
color: white;
border-radius: var(--roundedLight);
background: ${(props) => props.size == 0 ? "var(--red-400)" : "blue" } ;


`


