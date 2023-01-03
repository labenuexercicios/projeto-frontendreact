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

export const StyledSelect = styled.select`
    height: 5vh;
    width: 7vw;
    text-align: center;
    font-size: 1.2rem;
    background: rgb(248, 0, 50);
    color: white;
    border-radius: 12px;
    cursor: pointer;
    text-overflow: "";

`
export const StyledButton = styled.button`
border-radius: 12px;
    padding: 12px 19px;
    background-color: rgb(248, 0, 50);
    border:none;
    color:white;
    margin-top:5em;
    &:hover{
        transition: 1s;
        opacity: 0.7;
    }
`
export const StyledOption = styled.option`
    width: 7vw;
`
