import styled from "styled-components";

export const StyledDiv = styled.div`
    display:flex;
    flex-direction: column;
    gap: 1em;
    width: 100%;
    height: auto;
    justify-content: center;
    align-items: center;
    background:  #f5f5f5 ;
    margin-left:15em;
    margin-top: 2em;
    padding: 2em;
`;

export const StyledDivQuant = styled.div`
    display: flex;
    flex-direction:row;
    width: 100%;
    justify-content: space-between;

`
export const StyledDivPrice = styled(StyledDivQuant)`
    display: flex;
    flex-direction:row;

`;

export const StyledButton = styled.button`
        width: 18em;
        height: 8vh;
        border-radius: 20px;
        border:none;
        background: rgb(248, 0, 50);
        color: white;
        font-size: 1em;

`
    ;
