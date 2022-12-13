import React from "react";
import styled from "styled-components";


export const FooterStyled  = styled.div`





background-color: wheat;



background-color: black;

display: flex;

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

background-image: url("https://fixthephoto.com/images/content/starry-night-sky-png-61616514258.jpg"),  url("https://fixthephoto.com/images/content/starry-night-sky-png-61616514258.jpg");
animation: fundoAnimado 200s linear infinite;
background-repeat: repeat-x, repeat-x repeat;


.footer{
  
  margin: 0;
  margin-left:35%;
  display: flex;
  align-items: center;
  border-radius: 10px;
  box-shadow: 10px 10px 10px 20px  grey;






}

p{
    display: flex;
    flex-direction: row;
    
    
    color:white;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
   
    /* height: 20px;
    margin-top: 6vh;
    
    padding-right:20vh;
    padding-left: 5px;
    border-radius:20px; */

    padding: 3%;
    width: 50vh;
    
    
}

.titulo-gab{

  
}

.github{
  height: 40px;
  /* padding: 18px;
  
  margin-top: 7vh; */
  padding-left: 20px;
}

.linkedin{
  height: 40px;
  /* padding: 18px;
  padding-left:15vh;
  margin-top: 7vh; */ 
  margin-left:10px;
  padding-left: 40px;
}

.astro{
  height: 80px;
  margin-top: 6vh;
  padding-bottom:2%;
  padding-right:5%;
  margin-top: 0.20vh;
  padding-left:2%;
  
  

}



`