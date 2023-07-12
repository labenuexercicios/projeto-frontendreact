import React from "react";
import { ContainerFooter, MainFooter, ImageFooter, Likedin, Github } from "./Footer.styles"
import github from "../../assets/logogithub-removebg-preview.png"
import linkedin from "../../assets/LogoLinkedin.png"


export function Footer() {
    return (
        <MainFooter>
            <ContainerFooter>
                <h3>Design e Criação <br></br> Marina Rosas Rachid Jaudy</h3>
                <ImageFooter>
                    <a href="https://github.com/MJFreedom"> <Github src={github} alt="Logo github" /></a>
                    <a href="https://www.linkedin.com/in/marina-jaudy-599b11a9/"> <Likedin src={linkedin} alt="Logo linkedin" /></a>
                </ImageFooter>
            </ContainerFooter>
        </MainFooter>
    )
}