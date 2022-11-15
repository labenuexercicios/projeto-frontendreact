import React from "react";
import {ContainerFooter, ImageFooter, Likedin, Github} from "./Footer.styles"
import github from "../../assets/logogithub-removebg-preview.png"
import linkedin from "../../assets/LogoLinkedin.png"


export function Footer (props){
    return(
    <>   
        <ContainerFooter>
            <h3>Marina Rosas Rachid Jaudy</h3>
            <ImageFooter> 
                <a href="https://github.com/MJFreedom"> <Github src={github} alt="Logo github"/></a>
                <a href="https://www.linkedin.com/in/marina-jaudy-599b11a9/"> <Likedin src={linkedin} alt="Logo linkedin" /></a>
            </ImageFooter>
            <h3>2022</h3>
        </ContainerFooter>
    </>
)
}