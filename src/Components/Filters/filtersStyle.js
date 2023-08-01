import styled from "styled-components";

export const FilterContainer = styled.div`
    background-image: linear-gradient(to bottom, lightcyan, lightgray, gray);
    display: flex;
    flex-direction: column;
    width: 20vw;
    text-align:center;
    
        
`

export const StyleInput = styled.input`
    border-radius: 5px;
    border:solid black 0.5px;
    width: 17vw;
    height: 3.5vh;
    text-align:center;
`

export const Form = styled.form`
    padding-top:1vh;
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