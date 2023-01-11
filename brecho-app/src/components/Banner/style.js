import styled from 'styled-components';

export const Container = styled.section`
width: 100vw;
height: 280px;
background-color: teal;
display: flex;
align-items: center;
justify-content: center;
`
export const Contact = styled.div`
text-align: center;
`
export const ContactTitle = styled.div`
padding-bottom: 10px;
padding-right: 20px;
font-size: 30px;
font-weight: 700;
color: white;

`
export const ContactDesc = styled.div`
font-size: 18px;
font-weight: 400;
color: white;
`
export const SearchContainer = styled.div`
background-color: white;
border: 0.5px solid lightgrey;
display: flex;
align-items: center;
width: 35%;
`
export const Input = styled.input`
width: 90%;
height: 40px;
border: none;
font-size: 16px;
margin-left: 10px;
padding-left: 10px;
`
export const Button = styled.button` 
background-color: transparent;
border: none;
margin-left: 10px;
cursor: pointer;
`
