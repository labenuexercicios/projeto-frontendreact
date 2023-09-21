import styled from "styled-components";


export const Card = styled.div`
    
    height:35vh;
    width: 13vw;
    padding-top:1.5vh;
    text-align: center;
    font-size:0.9rem;

`

export const StyleButton = styled.button`
    background-color: black;
    color:white;
    width: 9vw;
    height: 3vh;
    border-radius: 5px;
    font-size:0.6rem;
    border:none;
    cursor: pointer;
    :hover {
        background-image: linear-gradient(to bottom, gray, black);
        width: 9.5vw;
        height: 3.5vh;
    }
`

export const StyleImage = styled.img`
    :hover{
        -moz-transform: scale(1.1);
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }

`