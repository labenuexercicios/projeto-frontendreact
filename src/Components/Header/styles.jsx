import styled from 'styled-components'

export const HeaderContainer = styled.header`
    width: 100vw;
    height: 8vh;
    background-color: #513d3d;
    border: 1px solid black;
    display: flex;
    justify-content: space-between;
    position:fixed;
`

export const Logo = styled.div`
    display: flex;    
    width:100vw;
    align-items: center;
    justify-content: space-evenly;
    font-weight: bold;
    font-size: 1.5rem;
    gap: 16px;
`

export const NavBar = styled.nav`
    
    width: 100%;       
`
export const OptionsList = styled.ul`
    display: flex;
    list-style-type: none;
    justify-content: space-evenly;
    height: 100%;
    align-items: center;
`