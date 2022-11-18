import styled from "styled-components";



export const MainCard = styled.main`
width: 100vw;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

.quantify{
    padding: 20px;
}

section{
    width: 90%;
    height: 90%;
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 16px;
}
`