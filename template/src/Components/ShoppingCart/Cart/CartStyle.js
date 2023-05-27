import { Styled, styled } from "styled-components"

export const CartStyle = styled.div`
z-index: 30;
    background-color: white;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 20px;
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    width: 30vw;
    animation-name: grow;
    animation-duration: 0.6s;
    animation-timing-function: ease-in-out;
    @keyframes grow {
        0% {transform: translateX(30vw)}
        100% {transform: translateX(0)}
    }
    
    `
export const Div1 = styled.div`
width: 100%;
height: 100px;
    button:first-child{
        font-size: 50px;
        position: fixed;
        border: transparent;
        rotate: 45deg;
        top: 0;
        right: 0;
        background-color: transparent;
        width: 100px;
        height: 100px;
        animation-name: rotateX1;
        animation-duration: 0.4s;
        animation-timing-function: ease-in-out;
    @keyframes rotateX1 {
        0% {transform: rotate(0)}
        100% {transform: rotate(90deg)}
    }
        
    }
    button:first-child:hover{
        animation-name: rotateX2;
        animation-duration: 0.4s;
        animation-timing-function: ease-in-out;
    @keyframes rotateX2 {
        0% {transform: rotate(90deg)}
        100% {transform: rotate(0)}
    } }
    `
export const Div2 = styled.div`
max-height: 450px;
display: flex;
flex-direction: column;
overflow-y: auto;
`
export const Div3 = styled.div`
width: 90%;
height: 100px;
border-top: 1px solid rgb(179, 179, 179);;
display: flex;
flex-direction: column;
justify-content: space-between;
position: absolute;
bottom: 30px;
right: 20px;
button:first-child{
    height: 50px;
    width: 50%;
}
button:nth-child(2){
    height: 50px;
    width: 50%;
    background-color: black;
    color: white;
}
`

export const Background = styled.section`
z-index: 30;
position: fixed;
top: 0;
right: 0;
background: #00000083;
width: 100vw;
height: 100%;
`