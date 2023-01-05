import styled from "styled-components";

export const StyledDiv = styled.div`
    display:flex;
    flex-direction: column;
    gap: 1em;
    width: 30vw;
    height: 40vh;
    border: 2px solid;
    justify-content: space-between;

`;

export const StyledDivQuant = styled.div`
    display: flex;
    flex-direction:row;
    width: 100%;

`
export const StyledDivPrice = styled(StyledDivQuant)`
    display: flex;
    flex-direction:row;

`;
