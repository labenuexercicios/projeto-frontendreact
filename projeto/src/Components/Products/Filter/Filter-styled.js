import styled from "styled-components"

export const FilterContainer = styled.article`
width: 20vw;
height: 430px;
background-color: white;
box-shadow:3px 3px 0px red;
display: flex; 
flex-direction: column;
align-items:center;
justify-content:space-around;
border-radius: 10px;
margin-bottom: 20px;
align-self: flex-start;
`
export const Title1 = styled.h3 `
font-size: 20px;
`

export const Title2 = styled.h1 `
font-size: 15px;
text-transform: uppercase;
font-weight: bold;
align-self:flex-start;
padding-left: 10px;`

export const InputContainer = styled.div `
display: flex;
width: 80%;
align-items:center;
justify-content: space-around;
text-align:center;`

export const CategoryContainer =  styled.div `
display: flex;
flex-direction: column;
align-items:center;
justify-content: center;
gap: 5px;
width: 50%;
height: 100%;`

export const ButtonAply = styled.button `
width: 100px;
height: 30px;
font-size: 15px;
background-color: #e4f4fd;
box-shadow:0px 5px 8px gray;
border: 1px solid blue;
color: blue;
border-radius: 10px;
transition: .4s;
&:hover{
    color:white;
    background-color: blue;
}`

export const ButtonClean = styled.button `
width: 100px;
height: 30px;
font-size: 15px;
background-color: white;
box-shadow:0px 5px 8px gray;
border: 1px solid white;
color: black;
border-radius: 10px;
transition: .4s;
&:hover{
    color:white;
    background-color: red;
    border: 1px solid red;
}`

export const Input = styled.input `
background-color: #ff9999;
width: 90px;
height: 30px;
box-shadow:0px 5px 8px gray;
color: black;
outline: none;
border: 1px solid red;
border-radius:10px;
text-align:end;
&::placeholder {
   color:black;
}
`

export const Fieldset = styled.fieldset`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items:center;
justify-content: center; `

export const Select = styled.select `
background-color: #ff9999;
width: 90px;
height: 30px;
box-shadow:0px 5px 8px gray;
color: black;
outline: none;
border: 1px solid red;
border-radius:10px;
text-align:center;
`

export const Options = styled.option`
background-color: #e4f4fd;
width: 90px;
height: 30px;
color: black;
outline: none;
border: 1px solid red;
text-align:center;
`