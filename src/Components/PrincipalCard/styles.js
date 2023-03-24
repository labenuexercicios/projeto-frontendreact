import styled from "styled-components";
import background from "../../assets/background.png"

export const MainCard = styled.main`
width: 100vw;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: black;
background-image: url(${background});

.quantify{
    padding: 20px;
    color: white;
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