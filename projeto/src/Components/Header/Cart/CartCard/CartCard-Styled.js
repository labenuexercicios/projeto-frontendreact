import styled from "styled-components";

export const CardConatainer = styled.article`
width: 100%;
height: 100px;
display:flex;
align-items: center;
justify-content: space-between;
font-family: 'EB Garamond', serif;
outline:none;
border:none;
box-shadow:0px 5px 8px gray;
border-radius:10px;
background-color: #f7f7f5;
`

export const CardImage = styled.img`
width:90px;
height: 90px; 
border: 2px solid red;
border-radius: 10px;
`

export const TextContainer = styled.div`
width:70%;
height: 100px;
display:flex;
flex-direction:column;
align-items:flex-start;
justify-content: space-around;`

export const ButtonContainer = styled.div`
width:10%;
height: 100px;
display:flex;
flex-direction:column;
align-items:center;
justify-content: space-around;`

export const Input = styled.input`
background-color: #ff9999;
width: 35px;
height: 35px;
box-shadow:0px 5px 8px gray;
color: black;
outline: none;
border: 1px solid red;
border-radius:10px;
text-align:end;`

export const ExcludeButton = styled.button`
width: 80px;
height: 25px;
background-color: #f7f7f5;
border-radius:10px;
color: gray;
outline:none;
border:none;
box-shadow:0px 5px 8px gray;
cursor: pointer;
&:hover{
    background-color:#eeeeee;
    }
&:active{
    filter: brightness(0.8)
}
`