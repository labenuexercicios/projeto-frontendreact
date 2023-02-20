import styled from "styled-components";

export const CarrinhoContainer = styled.div`
display: flex;
flex-direction: column;
width: 100vw;
height: 70vh; 
margin: 10px;
`
export const ButtonContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 20vh;
button{
width: 10vw;
}
`
export const MapContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
width: 90vw;
height: 50vh; 
margin: 10px;
border-radius: 10px;
p{
    display: flex;
    justify-items: end;
    color: black;
}
`
export const ListaItem = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 250px;
height: 150px;
color: black;
img{
min-width: 350px;
min-height: 200px;
border-radius: 10px;
}
button{
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background-color: aqua;
}
.button{
    display: flex;
    gap: 10px;
}
`
