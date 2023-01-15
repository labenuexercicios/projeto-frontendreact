import {createGlobalStyle} from "styled-components"
import styled from "styled-components"

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family:Arial, Helvetica, sans-serif;
}



`

export const Papaidabagunca = styled.section`
 display: flex;
 flex-direction: row;
 gap: 10px;


 .filtrozinho{
   display: flex;
    background: black;
    height: 100%;
    width: 15vw;
 }

 .cardzinho{
   margin-top: 100px;
   margin-bottom: 350px;
   padding-top: 30px;
    display: grid;
    grid-template-columns:1fr 1fr 1fr 1fr; 
    background: whitesmoke;
    height: 100vh;
    width: 100vh;
    gap: 20px;
    padding: 20px;
    position: relative;
 }




`


