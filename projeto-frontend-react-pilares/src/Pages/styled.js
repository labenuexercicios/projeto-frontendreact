import React, {components} from 'react'
import styled from  'styled-components' 

export const Centered = styled.div`

display: flex;
flex-flow: row wrap;
 width: 94%;
margin-left: 2%;
min-height: 90vh;
     display: flex;
 flex-flow: row wrap;
 justify-content: space-around;
 align-items: center;
background: var(--gray-700);

`

export const Aside = styled.aside`
background-color: #00ff00;
  display: flex;
  flex-flow: column wrap;
  width: 20%;
  height: 100%;

  min-height: 90vh;
min-width: 200px;
  align-self: center;


@media screen and (max-width: 769px){
{background-color: #00ff00;
 
  flex-direction: column wrap ;
  width: 100%;
  height: 100%;
 
  max-width: 769px;

   max-height:5vh;
}
}
`

export const Section = styled.ul`

  display: flex;
  flex-direction: column wrap;
  flex-wrap: wrap;
  width: 80%;
  height: 100%;
  min-height: 45vh;
  align-self: center;
justify-content: center;


@media screen and (max-width: 769px){

    
    {

    display: flex;
  flex-direction: column wrap ;
  width: 100%;
  height: 100%;
  max-width: 769px;
  justify-content: center;
  
   min-height: 900px;
   padding-bottom: 6vh;
}
}
`