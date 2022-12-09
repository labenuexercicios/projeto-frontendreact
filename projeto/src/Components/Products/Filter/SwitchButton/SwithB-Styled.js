import styled from "styled-components"

export const SwitchContainer = styled.div `
display:inline-block;
width: 40px;
height: 20px;
position:relative;
`

export const Input = styled.input `
opacity: 0;
width:40px;
height:20px;
position:absolute;
top:0;
left:0;
z-index: 2;
`

export const Button = styled.span `
position: absolute;
top:0;
left:0;
right:0;
bottom:0;
display: flex;
justify-content: space-between;
align-items:center;
border-radius: 40px;
background-color: #e4f4fd;
border: 1px solid blue;
z-index: 1;
&::before{
    content: "";
    width:18px;
    height:19px;
    position:absolute;
    left: 3px;
    border-radius: 50%;
    transition: .4s all ease;
    background-color:blue;
};

${Input}:checked + && {
    background-color: #ff9999;
    border: 1px solid red;
}

${Input}:checked + &&::before {
    transform: translateX(15px);
    background-color: red;
}
`

