import styled from "styled-components";

export const Card = styled.div`
    height: 45vh;
    width: 15vw;
    margin: 0 auto;
    margin-bottom: 6vh;
`

export const ImageCard = styled.img`
    height: 32vh;
    width: 100%;
`
export const TextCard = styled.p`
    color: white;
    margin: 0.2vh 0 0.2vh 2vh;
`
export const AddCart = styled.button`
    background-color: #A9A9A9;
    font-size: small;
    margin-left: 15%;
    margin-top: 0.5vh;
  
   &:hover{
        border-color: yellow;
   }
`