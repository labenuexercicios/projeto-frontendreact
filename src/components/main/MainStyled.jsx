import styled from "styled-components";
import mp4 from "../../assets/back-ground.gif"

export const MainStyled = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(to bottom,
        rgba(252, 252, 252, 0.9),
        rgba(0, 0, 49, 0.9),
        rgba(0, 0, 0, 0.9)), url(${mp4});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-color: rgb(21, 21, 21);
    width: cover;
    flex-grow: 1;
    overflow-y: hidden;
    min-height: 80vh;
`