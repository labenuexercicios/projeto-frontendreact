import styled from "styled-components";

export const Modal = styled.div`
width: 35vw;
height: auto;
position: fixed;
top: 70px;
right: 0;
z-index: 10;
display: flex;
justify-content: center;
align-items: center;

`
export const ContainerModal = styled.div`
background-color: #f6f6f6;
color: #000;
width: 90%;
height: 650px;
border-radius: 20px;
border: 1px solid gray;
overflow: hidden;
overflow-y: scroll;
`
export const CloseButton = styled.button`
background-color: transparent;
border: none;
width: 35px;
height: 35px;
position: absolute;
right: 40px;
top: 20px;
`
export const Content = styled.div`

`
export const TitleCart = styled.div`
text-align: center;
font-size: 20px;
font-weight: 500;
padding-top: 20px;
margin-bottom: 20px;
`
export const ContainerCart = styled.div`
display: flex;
flex-direction: column;

`
export const ListShopingCart = styled.div`
margin: 3px 10px;
background-color: white;
padding: 5px;
`
export const TitleShopingCart = styled.span`
margin: 10px;
font-size: 14px;
`
export const ButtonShopingCart = styled.button`
width: 20px;
height: 20px;
background-color: teal;
color: white;
border: none;
margin: 8px;
`
export const PriceShopingCart = styled.span`
margin: 10px;
font-size: 14px;
`
export const ToShopingCart = styled.span`
text-align: right;
margin-right: 20px;
margin-bottom: 30px;
font-size: 20px;
padding: 20px 20px 0 30px;
`
export const SubShopingCart = styled.span`
font-size: 12px;
margin-left: 50px;
`
export const ButtonNow = styled.button`
text-align: center;
border: none;
margin: 0 20px 20px;
padding: 10px 20px;
background-color: black;
color: white;
font-size: 20px;
font-weight: 700;
cursor: pointer;
transition: 0.5s;


&:hover {
    padding: 15px 25px;
}
`

