import styled from "styled-components";
import React from "react";


export const StyledInicial = styled.div`

@keyframes fundoAnimado {

0%{
  background-position: 0 0, 0 0;
}

50%{
  background-position: 50% 0, 50% 0;
}

100%{
  background-position: 100% 0, 100% 0;
}

};





background-image: url("https://fixthephoto.com/images/content/starry-night-sky-png-61616514258.jpg" ),  url("https://fixthephoto.com/images/content/starry-night-sky-png-61616514258.jpg");
width: 100vw;
height: 100vh;
background-color: black;
animation: fundoAnimado 100s linear infinite;
background-repeat: repeat-x, repeat-x repeat repeat;
-webkit-background-size: contain;
-moz-background-size: contain;
background-size: contain;
-o-background-size: contain;
/* background-size: 310px 310px; */















button{

background-color: black;
color: white;
font-family:'PT Serif', serif;

padding: 5px;
align-items: center;
background: linear-gradient(90deg, rgba(28,4,106,1) 35%, rgba(59,59,59,1) 94%);
  border-radius: 20px;
  border: hidden;
  box-shadow: 10px 10px 10px grey;
  

font-size: 15px;
font-family: 'Kdam Thmor Pro', sans-serif;
width: 150px;


}
button:hover{
padding:10px;



cursor: pointer;
}


.Titulo-Site{



font-size: 20px;
font-family: 'Kdam Thmor Pro', sans-serif;
/* background-image: url("https://images.unsplash.com/photo-1513628253939-010e64ac66cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80") ; */
height: 544px;
color:black;
align-items: center;
display: flex;
justify-content: center;
flex-direction: column;

/* flex-direction:column; */


margin:0;


}

h1{
color: white;
border-radius: 10px;
padding: 10px;
/* background-color: rgba(10,23,55,0.5); */
margin-bottom:1px;
margin-top:1px;
background-color: black;

@import url('https://fonts.googleapis.com/css2?family=Kdam+Thmor+Pro&display=swap');
font-family: 'Kdam Thmor Pro', sans-serif;
background: linear-gradient(90deg, rgba(28,4,106,1) 35%, rgba(59,59,59,1) 94%);
  border-radius: 10px;
  box-shadow: 10px 10px 10px grey;
}

h4{
color: white;
border-radius: 10px;
padding: 20px;
/* background-color: rgba(10,23,55,0.5); */
background: linear-gradient(90deg, rgba(28,4,106,1) 35%, rgba(59,59,59,1) 94%);
  border-radius: 10px;
  box-shadow: 10px 10px 10px grey;

margin-top: 1px;
@import url('https://fonts.googleapis.com/css2?family=PT+Serif:ital@1&display=swap');
font-family:'PT Serif', serif;
}



`