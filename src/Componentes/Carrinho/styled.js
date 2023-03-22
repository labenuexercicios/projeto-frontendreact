import styled from "styled-components"


export const CartMenu = styled.div`

display: flex;
flex-direction: column;
margin-left: 1vw;
border: 1px solid black;
height: 60vh;
width: 18vw;
margin-top: 1vw;
border-radius: 10px;
background-color: rgb(21,31,66);
overflow:hidden;
overflow-y: scroll;
padding-bottom: 1vh;

::-webkit-scrollbar{
    background-color: rgb(21,31,66);
    border-radius: 10px;
    padding: 10px;
    
    
}

::-webkit-scrollbar-thumb{
 background-color: rgb(83,104,213); 
border-radius: 10px;


}



`



export const H1Cart = styled.div`
color:white;
margin-left: 1vw;
margin-top: 2vh;
font-size: 2rem;


`

export const H1Total = styled.div`
color:white;
margin-left: 1vw;
margin-top: 3vh;
padding-left: 1vw;
font-size: 1.3rem;
padding-top: 1vh;

padding-bottom: 1.1vh;
margin-right: 1vw;
background-color: rgb(21,31,66);
border-radius: 10px;
border: 1px solid black;

`

export const BuyButton = styled.button`
display: flex;
align-items: center;
justify-content: center;
width: 14vw;
margin-left: 1vw;
height: 7vh;
font-size: 4vh;
border:  1px solid black rgb(161,109,177);
border-radius: 10px;
background-color: white ;
color: black;



`