import styled from "styled-components"
import fundo from "../../assets/hd-wallpaper-2675322.jpg" //Resolver qual foto colocar no fundo do header//


export const StyledHeader = styled.header`
    height: 7vh;
    padding-left: 1rem;
    /* padding-top: 11px; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: black;
    /* background-image: url(${fundo}) ; */
    background-color: white;
    font-family: 'Kanit', sans-serif;
`

export const StyledCart = styled.img`
    margin-right: 0.7rem;
    width: 4vh;
    height: 4vh;
`
