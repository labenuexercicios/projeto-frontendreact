import styled from "styled-components"
import fundo from "../../assets/kai-pilger-Ef6iL87-vOA-unsplash.jpg"

export const StyledMain = styled.main`
    height: auto;
    /* background-image: url(${fundo}) ; */
    background-color: black;
    display: flex;
    flex-direction: column;
`

export const StyledSelect = styled.select`
    margin: 20px;
    padding: 5px;
    width: 30vw;
    align-self: center;
    border: none;
    border-radius:2px;
    background-color: white;
    font-family: 'Kanit', sans-serif;
`

export const StyledButton = styled.button`
    margin: 20px;
    padding: 5px;
    width: 30vw;
    align-self: center;
    border: none;
    border-radius:2px;
    background-color: white;
    font-family: 'Kanit', sans-serif;
`

export const StyledCondicionais = styled.div`
    display: flex;
    justify-content: center;
`