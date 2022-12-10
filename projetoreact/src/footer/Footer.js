import { FooterContainer } from "./Footer.styled"
import gitHub from "../assets/icons8-github.svg"
import linkedin from "../assets/icons8-linkedin.svg"





function Footer(props) {

  
  return (
    <FooterContainer>
            <div className="social-network">

                <a href="https://github.com/Francinaldapmfaria" target="_blank">
                    <img class="icons" src={gitHub} alt="github" /></a>

                <a href="https://www.linkedin.com/in/francinalda-portela-moura-de-faria/" target="_blank">
                    <img class="icons" src={linkedin} alt="linkedin" /></a>

                
            </div>

            <a className="galaxy">
                Desenvolvido por Francinalda Portela Moura de Faria
            </a>

        </FooterContainer>

  )
}

export default Footer;
