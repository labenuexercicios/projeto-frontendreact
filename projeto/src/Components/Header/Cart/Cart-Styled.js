import styled from "styled-components";

export const CartWrapper = styled.div`
width: 100vw;
height:100vh;
top: 0;
left: 0;
z-index: 10;
background-color: rgba(0,0,0,0.8);
display: flex;
justify-content: center;
align-items:center;
position:fixed;
`

export const CartContainer = styled.div`
width: 80%;
height: 80%;
background-color:white;
font-family: 'EB Garamond', serif;
color: black;
border-radius: 40px;
box-shadow:3px 3px 0px red;
display:flex;
align-items:center;
flex-direction:column;
justify-content:space-between;
` 

export const CloseButton = styled.button `
align-self: flex-start;
background-color: transparent;
border: none;
outline: none;
width: 32px;
height: 32px;
right: -95%;
top: 20px;
position:relative;
display: flex;
z-index:3;
justify-content:center;
align-items: center;
&::before,
&::after{
    content: " ";
    position: absolute;
    width: 2px;
    height: 20px;
    background-color: black;
}
&::before{
    transform: rotate(45deg);
}
&::after{
    transform: rotate(-45deg);
}
`

export const CartContent = styled.div `
width: 90%;
height:90%;
display: flex;
flex-direction:column;
align-items:center;
justify-content: space-evenly;
padding-bottom: 15px;
`

export const EmptyCart = styled.button `
width: 120px;
height: 30px;
background-color: white;
border-radius:10px;
color: gray;
outline:none;
border:none;
box-shadow:0px 5px 8px gray;
cursor: pointer;
&:hover{
    background-color:red;
    color: white;}
&:active{
    filter: brightness(0.8)
}

`

export const DisplayItems = styled.section `
width: 90%;
height: 70%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
gap: 10px;
overflow-y:scroll;
padding:10px;
background-color: white;
border-radius:5px;
border: none;
&::-webkit-scrollbar{
    background-color: #f7f7f5;
    width:5px;
    border-top-right-radius:5px;
    border-bottom-right-radius:5px;
}
`

export const ButtonContainer = styled.div`
width: 90%;
height:50px; 
display: flex;
align-items: center;
justify-content:space-between;`

export const Shop = styled.button `
width: 120px;
height: 40px;
background-color: blue;
color: white;
border-radius:10px;
outline:none;
border:none;
box-shadow:0px 5px 8px gray;
cursor: pointer;
animation:0.5s;
&:hover{
    transform: scale(1.1)}
&:active{
    filter: brightness(0.8)}
`
export const PriceContainer = styled.div `
display: flex;
flex-direction: column;
align-items:flex-start;
justify-content: center;`

export const MessageContainer = styled.div`
width: 80%;
height: 50%;
justify-self:center;
background-color:#f7f7f5;
box-shadow:3px 3px 0px blue;
border-radius:40px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
&:hover{
    background-color:white;
    box-shadow:3px 3px 0px red;}
&:active{
    filter: brightness(0.8)}`
