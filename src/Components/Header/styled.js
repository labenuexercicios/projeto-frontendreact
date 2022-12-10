import styled from "styled-components";
import footwear from '../img/logo.png'
import cart from '../img/cart.png'

export const Head = styled.header`
    background-color: #6667ab;
    display:flex;
    color: white;
    width: 100%;
    height: 8vh;
    padding-top: 1vh;
    justify-content: space-evenly;
    flex-wrap:wrap;
    font-family:"Helvetica";
    flex-direction: row;
`

export const Logo = styled.img`
    content:url(${footwear});
    height:6vh;
    cursor:pointer;
`

export const Input = styled.input`
&{
 border: 2px solid transparent;
 border-bottom-color: #777;
 outline: none;
 background-color: white;
 color: #0d0c22;
 height:3vh;
 transition: .3s cubic-bezier(0.645, 0.045, 0.355, 1);
}

&:focus,&:hover {
 outline: none;
 padding: .2rem 1rem;
 border-radius: 1rem;
 border-color: #7a9cc6;
}

&::placeholder {
 color: #777;
}

&:focus::placeholder {
 opacity: 0;
 transition: opacity .3s;
}
`

export const InputTeste = styled.div`
{
 position: relative;
}

.input {
 border: solid 1.5px #9e9e9e;
 border-radius: 1rem;
 background: none;
 padding: 1rem;
 font-size: 1rem;
 color: #6667ab;
 transition: border 500ms cubic-bezier(0.4,0,0.2,1);
}

.label {
 position: absolute;
 left: 15px;
 color: #e8e8e8;
 pointer-events: none;
 transform: translateY(1rem);
 transition: 500ms cubic-bezier(0.4,0,0.2,1);
}

.input::placeholder{
    opacity:0;
}

.input:focus, input:valid {
 outline: none;
 border: 1.5px solid #1a73e8;
 background-color:white;
}

.input:focus ~ label, input:valid ~ label {
 transform: translateY(-60%) scale(0.8);
 background-color: none;
 padding: 0 .2em;
 color: black;
}

.input:focus::placeholder{
    opacity:1;
    transition: opacity 500ms;
}
`
export const TesteIcon = styled.div`
&{
  position: relative;
  display: inline-block;
}

img{
    height:5vh;
    cursor:pointer;
}

.mostrar{
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 200px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 12px 16px;
  z-index: 1;
  color: #6667ab;
}

&:hover .mostrar {
  display: block;
}
    
 h2{
        color: #6667ab;
}
button{
        background-color: #6667ab;
        border-radius: 8px;
        font-size: 16px;
        color: white;
        width: 50%;
        height: 20px;
        border: none;
        transition: transform .3s;
}
button:hover{
        cursor: pointer;
        background-color: #6667ab;
        transform: scale(1.1);
}
.tenis:hover{
        cursor: pointer;
        color: #A94DF3;
}
span{
        font-size: 12px;
    }
.tenis img{
    height:50%;
    width:50%;
}
`