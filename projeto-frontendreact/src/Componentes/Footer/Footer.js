import React from "react";
import { Container, Name, Img, ImgGitHub, ImgLinKedin } from "./Styles";
import GitHub from "../../asset/img/GitHub.jpg"
import LinKedin from "../../asset/img/Linkedin.jpeg"

const Footer = () => {

    return (
      <Container>
       <Name>Criado por: Heytor de Souza</Name>
       <Img>
        <ImgGitHub href="https://github.com/Heytordesouza" target="_blank"><img src={GitHub} alt="GitHub"></img></ImgGitHub>
        <ImgLinKedin href="https://www.linkedin.com/in/heytor-de-souza" target="_blank"><img src={LinKedin} alt="LinKedin"></img></ImgLinKedin>
       </Img>
      </Container>
    );
};

export default Footer;