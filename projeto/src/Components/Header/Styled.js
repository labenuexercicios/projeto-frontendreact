import styled from "styled-components"
import background from "./assets/Header-Background.gif"


export const HeaderWrapper = styled.div `
display: flex;
align-items:center;
justify-content:center;
width: 100vw;
height: 100px;
background-color: #eeeeee;
`


export const HeaderContainer = styled.header `
background-image: url(${background});
background-position: center;
background-repeat:no-repeat;
background-size: cover;
color: black; 
width: 95%;
height:90%;
display: flex;
justify-content: space-between;
align-items:center;
padding-left: 20px;
padding-right: 20px;
box-shadow:0px 5px 8px gray;
border: 2px solid black;
border-radius: 10px;
` 

export const NameContainer = styled.div`
font-family: 'Press Start 2P', cursive;
font-size: 40px;
text-transform: uppercase;
color:white;
text-shadow: 0px -5px 10px white;
`

export const CartContainerButton = styled.div`
background-color: white;
width: 75px;
height: 75px;
border-radius: 50%;
display:flex;
align-items:center;
justify-content:center;
box-shadow: 0px 0px 10px 2px white;
opacity:0.7;
&&:hover{
    opacity:1;
}
`

export const CartImg = styled.img`
width: 65px;
height:65px;
border-radius: 50%;
`
export const InputContainer = styled.div`
display: flex; 
gap: 10px;
align-items:center;
justify-content:space-between;`

export const Input = styled.input `
font-family: 'EB Garamond', serif;
width: 250px;
height: 25px;
border-radius: 40px;
outline:none;
padding: 5px;
background-color: white;
border: 2px solid white;
box-shadow: 0px 0px 10px 2px white;
`

export const SearchButton  = styled.button`
background-color: white;
width: 30px;
height: 30px;
border-radius: 50%;
position: relative;
display:flex;
align-items:center;
justify-content:center;
border: 1px solid white;
box-shadow: 0px 0px 10px 2px white;
transition: .4s;
&:hover {
    background-color:#ff9999;
    border: 1px solid #ff9999;
}
`

export const ButtonImage = styled.img `
width: 30px;
height: 30px;
border-radius: 50%;
`


export const Nav = styled.nav`
background-color:black;
color:white;
font-size: 10px;
width: 100%;
height:40px;
text-align:center;
`
export const Note = styled.span`
width: 25px;
height: 25px;
border-radius: 50%;
position:absolute;
right:40px;
top: 20px;
display:flex;
align-items:center;
justify-content:center;
color: white;
background-color: blue; 
z-index:3;
`