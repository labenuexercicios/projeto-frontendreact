import React from "react";
import { FooterContainer } from "./styled";
import logoLinkedin from "../../imagens/logoLinkedin.png"
const Footer = () => {
    return (
        <FooterContainer>
                <div className="logoLinkedin">
                <p><a href="https://www.linkedin.com/in/jaziel-bury-santos-21b341244/" target="_blank"><img src={logoLinkedin}/></a></p>

                <p><a href="https://github.com/jazisnow" target="_blank"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"
                    alt=""></img></a></p>
           
            </div>

        </FooterContainer>
    )
}

export default Footer