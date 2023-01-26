import styled from "styled-components"

export const ImputContainerStyled = styled.div`
    width: 100%; 
`
export const SearshInput = styled.input`
    width: 100%;
    height: 40px;  
    min-height: 10px;
    border-radius: 10px;
    border: none;
    margin-top: 40px;
    @media screen and (max-width: 500px) {
        margin-top: 0;       
    }        
`