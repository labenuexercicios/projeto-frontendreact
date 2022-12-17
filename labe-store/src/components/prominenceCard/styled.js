import styled from "styled-components";
import background from "../../img/background.jpg"


export const DivContainer = styled.div`
    display: flex;
    flex-direction: row;
    border: 2px solid;
    min-height: 70vh;
    width: 100%;
    background-image: url(${background});
`;

export const DivRigth = styled.div`
    min-height: 100%;
    width: 50%;
    border: 2px solid;
`
export const DivLeft = styled(DivRigth)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-right: 20em;

`

export const TxtTitle = styled.h1`
    font-family: helvetica;

`
