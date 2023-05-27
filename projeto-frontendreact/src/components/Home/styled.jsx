import styled from "styled-components";

export const HomeContainer = styled.div`
    background-color: black;
    height: 110vh;
    width: 80%;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    color: white;
    
`
export const HeadHome = styled.div`
    display: flex;
    justify-content: space-between;
`

export const TextHeadHome = styled.p`
    margin: 1vh 1vh 4vh 1vh;
    
`

export const SelectOrder = styled.select`
    height: 3vh;
    margin: 1vh 1vh 0vh 0;
`

export const HeadBlock = styled.div`
    display: flex;
`

export const CardDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
`