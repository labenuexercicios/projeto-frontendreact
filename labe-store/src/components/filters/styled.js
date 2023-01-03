import styled from "styled-components";

export const StyledDiv = styled.div`
    height: auto;
    width: 25vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2em;
`;

export const StyledDivPrice = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
    justify-content: center;
    margin-top: 1em;
    width: 100%;

`

export const StyledDivOrdem = styled(StyledDivPrice)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`
export const ContainerDiv = styled.div`
    width: 12em;
`

export const InputNumberMin = styled.input`
    width: 80%;
    height: 5vh;
    padding: 1em;
    font-size: 1em;
`
export const InputNumberMax = styled(InputNumberMin)``


export const LabelInputNumber = styled.label`
    font-size: 1.5em;
`
export const LabelInputOrdenacao = styled(LabelInputNumber)`
`
