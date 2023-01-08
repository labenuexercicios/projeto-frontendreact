import styled from "styled-components";


export const CartContainer = styled.div`
background-color: rgba(255,255,255,0.80);
width: 15vw;
height: 40vw;
position:fixed;
overflow-y: scroll;
top:10%;
right:0;
border: 2px solid gray;
margin: 2px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
gap: 2%;
border-radius: 10px;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.3));

`
export const CartTitle = styled.h1`
text-align: center;
margin: 4%;
font-family: 'Tauri', sans-serif;
font-weight: 400;
font-size: 1rem;
color: #242c38;
`


export const CloseShoppingCart = styled.button`
position: fixed;
top: 0%;
right: 0%;
display: inline;
margin:4%;
width: fit-content;
border-radius: 2px;
border: none;
:hover{
    cursor: pointer;
    color: white;
    background-color: #b82828;
}
`

export const TotalTxt = styled.h1`
text-align: center;
margin: 4%;
font-family: 'Tauri', sans-serif;
font-weight: 400;
font-size: 1rem;
color: #242c38;
justify-self: end;
`

export const ClearShoppingCart = styled.button`
text-align: center;
display: inline;
font-size: 0.8rem;
margin:4%;
width: fit-content;
border-radius: 2px;
border: none;
color: #242c38;
:hover{
    cursor: pointer;
    color: white;
    background-color: #b82828;
}
`