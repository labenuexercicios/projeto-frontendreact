import React from "react";
import { ContainerFooter, MainFooter, ImageFooter, Likedin, Github } from "./Footer.styles"
import github from "../../assets/logogithub-removebg-preview.png"
import linkedin from "../../assets/LogoLinkedin.png"


export function Footer() {
    return (
        <MainFooter>
            <ContainerFooter>
                <h3>Creation by:<br></br> Lucas de Oliveira Breia</h3>
                <ImageFooter>
                    <a href="https://github.com/MJFreedom"> <Github src={github} alt="Logo github" /></a>
                    <a href="https://www.linkedin.com/in/lucas-breia/"> <Likedin src={linkedin} alt="Logo linkedin" /></a>
                </ImageFooter>
            </ContainerFooter>
        </MainFooter>
    )
}