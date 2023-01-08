import styled from "styled-components";

export const CartDiv= styled.div`
display: flex;
flex-direction: row;
align-items:flex-start;
justify-content: space-evenly;
width: 15vw;
`

export const CartImg = styled.img`
width: 2.5rem;
`

export const ProductAdded = styled.ul`
display: flex;
flex-direction: column;
width:max-content;
height: max-content;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-items: space-between;
`

export const Txt = styled.li`
text-align: center;
list-style: none;
font-family: 'Tauri', sans-serif;
font-weight: 400;
font-size: 0.7rem;
color:black;
`
export const DivButton = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

export const ButtonCartProduct = styled.button`
width: 0.7rem;
font-size: 0.6rem;
border-radius: 2px;
font-family: 'Tauri', sans-serif;
cursor: pointer;
:hover{
    color: white;
    background-color: #b82828;
}
`

/* text-align: center;
display: inline;
;
margin:4%;
width: fit-content;
border-radius: 2px;
border: none;
:hover{
    cursor: pointer;
    color: white;
    background-color: #b82828; */