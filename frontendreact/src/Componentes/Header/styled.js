import styled from 'styled-components'

export const HeaderContainer = styled.header`
    width: 100vw;
    height: 10vh;
    background-color: #ffffff;
    border: 1px solid black;
    display: flex;
    justify-content: space-between; 
`
export const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: bold;
    font-size: 3rem;
    gap: 16px;
    padding:20px;  
`
export const NavBar = styled.nav`
    
    width: 25%;
`
export const OptionsList = styled.ul`
    display: flex;
    list-style-type: none;
    justify-content: space-evenly;
    height: 100%;
    align-items: center;
    text-decoration: underline #000000;
`
export const RegisterButton = styled.button`
    background-color: white;
    border-radius: 8px;
    cursor: pointer;
    width: 120px;
    padding: 10px;
    :hover{
        background-color: black;
        color: white;
    }
`

export const SendButton = styled.button`
    background-color: white;
    border-radius: 8px;
    cursor: pointer;
    width: 120px;
    padding: 10px;
    :hover{
        background-color: black;
        color: white;
    }
`