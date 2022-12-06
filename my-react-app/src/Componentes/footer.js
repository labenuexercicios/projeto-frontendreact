import React from "react"
import { MainFooter} from "./footer.styled"
import gitHub from "../assets/github.png"
import linkedin from "../assets/linkedin.png"


export function Footer(){
    return(
        <>
        < MainFooter>
        <a href="https://github.com/brunolimaptr" target="blank">
        <img src={gitHub}  width="50" height="50"/></a>
        
        <a href="https://www.linkedin.com/in/brunolimaptr/" target="blank">
        <img src={linkedin} width="50" height="50"/></a>    
        </ MainFooter>
       </>  
    )
}