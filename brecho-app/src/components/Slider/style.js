import styled from "styled-components";


export const Container = styled.div`
width: 100%;
height: 80vh;
display: flex;
position: relative;
overflow: hidden;

`
export const Arrow = styled.div`
width: 40px;
height: 40px;
background-color: #f7f7f7;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top: 0;
bottom: 0;
left: ${props => props.direction === 'left' && '10px' };
right: ${props => props.direction === 'right' && '10px' };
margin: auto;
cursor: pointer;
z-index: 2;
`

export const Wrapper = styled.div`
height: 100%;
transform: translateX(${props => props.slideIndex * -100}vw);
display: flex;
transition: all 1.5s ease;
`

export const Slide = styled.div`
display: flex;
align-items: center;
width: 100vw;
height: 100vh;
background-image: #${props => props.bg};
`
export const ImgContainer = styled.div`
flex: 1;
height: 100%;
`
export const InfoContainer = styled.div`
flex: 1;
padding: 50px;

`
export const Image = styled.img`
width: 100vw;
height: 100vh;
position: absolute;
`
export const Title = styled.h1`
font-size: 55px;
font-weight: 900;
position: absolute;
top:0;
margin-top: 260px;
`
export const Desc = styled.p`
margin: 50px 0px;
font-size: 20px;
font-weight: 700;
letter-spacing: 3px;
position: absolute;
top:0;
margin-top: 370px;
width: 650px;
`
export const Button = styled.button`
font-size: 20px;
font-weight: 900;
padding: 10px;
background-color: black;
cursor: pointer;
position: absolute;
top: 0;
margin-top: 470px;
color: white;

`