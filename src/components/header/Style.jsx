import styled from "styled-components"

export const HeaderStyled = styled.header`
    display: flex;
    width: 100vw;
    height: 150px;
    background-color: blue;
    gap: 30px;
    @media screen and (max-width: 500px) {
        display: flex;
        flex-direction: column;
        height: 450px;
        align-items: center;
        justify-content: center;
    }
`
export const HeaderCenterDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 30%; 
`


