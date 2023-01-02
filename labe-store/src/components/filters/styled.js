import styled from "styled-components";

export const StyledDiv = styled.div`
    height: auto;
    width: 15%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const StyledDivPrice = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
    justify-content: center;
    margin-top: 1em;

`

export const StyledDivOrdem = styled(StyledDivPrice)`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 2em;
    margin-bottom: 2em;
`
