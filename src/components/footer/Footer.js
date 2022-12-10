import React from "react";
import { FooterContainer, SocialContainer, FooterBoxContainer } from "./styled";

function Footer() {
  return (
    <>
      <FooterContainer>
        <FooterBoxContainer>
          <span>Desenvolvido por Diego Cezar</span>
          <SocialContainer>
            <a href="https://github.com/dgcezar">
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733609.png"
                alt="GitHub"
              />
            </a>
            <a href="https://www.linkedin.com/in/diego-cezar/">
              <img
                src="https://user-images.githubusercontent.com/22801918/89466567-7218c880-d74a-11ea-8d27-c83eb8a7f49c.png"
                alt="LinkedIn"
              />
            </a>
          </SocialContainer>
        </FooterBoxContainer>
      </FooterContainer>
    </>
  );
}

export default Footer;
