import styled from "styled-components";

export const ContainerDiv = styled.div`
    border: 2px solid;
    min-height: 30vh ;
    width: 30vw;
    position: absolute;
    z-index: 1;
    left: 65%;
    top: 8%;
    background-color:white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4em;
`;

export const CartEmpty = styled.div`
    margin-top: 4em;
`

export const CartFull = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1em;
    align-items: center;
`
