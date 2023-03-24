import styled from "styled-components";

export const CardContainer = styled.div`
    
    color: black;
    padding: 10px;
    text-align: center;
    margin: 5px;
    gap: 10px;
    border: 1px solid black;
    
    img{
        width: 8vw;
        height: 8vw
    }
    h2{
        font-size: 2vh
    }
    p{
        font-size: 3vh
    }  
`;

export const Button = styled.button`
    background-color: darkblue;
    color: white;
    width: 10vw;
    height: 5vh;
    border-radius: 5px;
    align-self: center;
    font-weight: normal;
    font-size: 2vh;
    margin-bottom: .8vh;   
`