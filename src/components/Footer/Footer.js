import React from 'react';
import imgGit from "../../assets/img/github.svg"
import imgLink from "../../assets/img/linkedin.svg"
import { FooterContainer } from './styles'


export default function Footer() {




  return (
    <FooterContainer>
      
        <span className="footer">
          
          <span>
            <p>Site desenvolvido por Marcelo Bigaram</p>
          </span>

          <span>
            <a href="https://github.com/mbigaram" target="_blank" >
              <img className="rsimg" src={imgGit} alt="github" /></a>
          </span>
          <span>
            <a href="https://www.linkedin.com/in/marcelo-bigaram/" target="_blank" >
              <img className="rsimg" src={imgLink} alt="linkedin" /></a>
          </span>

        </span>

      


    </FooterContainer>
  );
}
