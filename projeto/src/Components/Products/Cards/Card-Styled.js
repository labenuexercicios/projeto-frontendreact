import styled from "styled-components"

export const CardWrapper = styled.article `
width: 275px;
height: 370px;
background-color: white;
display: flex;
flex-direction: column;
align-items:center;
justify-content: space-evenly;
border-radius: 10px;
box-shadow:3px 3px 0px blue;
margin-bottom: 10px;
`

export const CardImage = styled.img `
margin-top: 5px;
width: 250px;
height: 180px;
border: none;
outline:none;
border-radius: 10px;
box-shadow:0px 3px 10px gray;
`

export const CardText = styled.div `
display: flex;
height:140px;
width:250px;
flex-direction: column;
align-items:center;
justify-content: center;`

export const CardTitle = styled.h4 `
text-transform: uppercase;
font-size: 20px;
font-weight: bold;
align-self: start;
color:black;
`

export const CardSubTitle = styled.h3 `
font-size: 16px;
color:gray;
align-self:flex-end;
padding-bottom: 5px;
`
export const CardDescriptionContainer = styled.div `
overflow:auto;
height:  60px;
text-align:justify;
padding:5px;
background-color: #f7f7f5;
border-radius:5px 5px;
border: 2px solid red;
&::-webkit-scrollbar{
    background-color: #ff9999;
    width:5px;
    border-top-right-radius:5px;
    border-bottom-right-radius:5px;
}
`
export const PriceContainer = styled.div`
display: flex;
width: 250px;
align-items:center;
justify-content: space-between;
gap: 5px;
`
export const Price = styled.p `
text-transform: uppercase;
font-size: 25px;
height:40px;
color: black;
font-weight: bold;
`

export const ButtonContainer = styled.div `
display: flex;
align-items: center;
justify-items: flex-end;
gap: 5px;`

export const Input = styled.input `
background-color: #ff9999;
width: 50px;
height: 30px;
box-shadow:0px 5px 8px gray;
color: black;
outline: none;
border: 1px solid red;
border-radius:10px;
text-align:center;
`

export const Button = styled.button `
width: 40px;
height: 40px;
display: flex;
align-items:center;
justify-content: center;
background-color: #e4f4fd;
box-shadow:0px 5px 8px gray;
border: 1px solid blue;
color: blue;
font-size: 30px;
border-radius: 50%;
transition: .4s;
&:hover{
    color:white;
    background-color: blue;
}
&:active {
    filter: brightness(0.8)}`

