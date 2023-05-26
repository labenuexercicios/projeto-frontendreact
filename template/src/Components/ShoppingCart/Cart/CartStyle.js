import { Styled, styled } from "styled-components"

export const CartStyle = styled.div`
    background-color: white;
    display: flex;
    /* flex-direction: column; */
    text-align: center;
    padding: 20px;
    flex-wrap: wrap;
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
export const Background = styled.section`
position: fixed;
top: 0;
right: 0;
background: #00000083;
width: 100vw;
height: 100%;
`