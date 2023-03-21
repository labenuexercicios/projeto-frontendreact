import { FooterContainer } from "./Footer.styled"
import linkedin from "../../Assets/icons8-linkedin-75.png"
import github from "../../Assets/icons8-github-75.png"
import instagram from "../../Assets/icons8-instagram-75.png"

function Footer() {
    return (
        <FooterContainer>
            <div className="social-network">

                <a href="https://github.com/gabrielmacieldev" target="_blank">
                    <img class="icons" src={github} alt="github" /></a>

                <a href="https://www.linkedin.com/in/gabriel-maciel-74a1391a2/" target="_blank">
                    <img class="icons" src={linkedin} alt="linkedin" /></a>

                <a href="https://www.instagram.com/gabrielmacieloff/" target="_blank">
                    <img class="icons" src={instagram} alt="instagram" /></a>
            </div>
            
            <a className="galaxy">
                Galaxy Store 2022 - Todos os direitos reservados ao desenvolvedor Gabriel Maciel
            </a>

        </FooterContainer>
    )
}

export default Footer;
