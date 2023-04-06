import styled from "styled-components";


export const StyledCard = styled.div(({produto})=>`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: auto;
    height: 27vh;

    background-image:linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)),url(${produto}) ;
    background-size: cover;

    /* background-color: black; */
    margin: 10px;
    background-repeat: no-repeat;
    `)

export const StyledH1 = styled.h1`
    color: white;
    font-family: "Kanit";
    font-weight: 500;
    /* position: relative; */
    /* opacity: 1; */
`