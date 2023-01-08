import styled from "styled-components";

export const NavBarContainer = styled.nav `
order: 0;
width: 100vw;
height: 3vw;
background: #F5F5F5;
text-align: center;
`

export const Menu = styled.ul`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
margin-top: 1%;
margin-left: 07%;
`

export const NavLink = styled.li`
list-style: none;
font-family: 'Tauri', sans-serif;
font-weight: 400;
font-size: 1rem;
color: #283d3e;
margin-right: 6rem;
:hover{
    cursor: pointer;
}
`

export const Filters = styled.select`
margin-right: 2rem;
`

export const InputTxt = styled.input`
background-color: #F5F5F5;
margin-right: 2rem;
border: none;
`