import styled from "styled-components";


export const ItemsContainer = styled.div`
    
    
`

export const ItemsImg = styled.img`
    width: 8vh;
    height: 8vh;

`

export const ItemsBox = styled.div`
    padding-top:1vh;
    display:flex;
    flex-direction: column;
    align-items: center;
    
    
`

export const HorizontalLine = styled.hr`
  width: 80%;
  
`
export const ButtonContainer = styled.div`
    display: flex;
    font-size: 1rem;
    gap: 1vw;

`

export const RemoveButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
`

export const StyleButton = styled.button`
    background-color: black;
    color:white;
    width: 9vw;
    height: 3vh;
    border-radius: 5px;
    font-size:0.7rem;
    border:none;
    cursor: pointer;
    :hover {
        background-image: linear-gradient(to bottom, gray, black);
        width: 9.5vw;
        height: 3.5vh;
        
    }
`