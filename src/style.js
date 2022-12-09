import styled from "styled-components";

export const Main = styled.main `
    display: flex;
    gap: 50px;
    @media screen and (min-width : 320px) and (max-width : 480px) {
            display: flex;
            flex-direction: column;
    }
`

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    gap: 80px;
`