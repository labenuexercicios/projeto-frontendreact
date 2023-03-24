import {MainFooter, Imagem} from "./styleFooter"
import github from "../../assets/logo-github.svg"
import linkedin from "../../assets/logo-linkedin.svg"
import logo from "../../assets/logo-footer.jpg"

const Footer = () => {
    return (

        <MainFooter>
            <div className="footer-dados">
                <div className="footer-introducao">
                    <Imagem src={logo} alt="logo-footer"/>
                    <br/><br/>
                    
                </div>

                <div className="footer-contatos">
                    <p>Fale Conosco:</p>
                    <p><b>Telefone Quantico</b></p>
                    <p>9999-XVII | 0800-CXC-32CX</p>
                    <br/>
                    <p><b>chamaoastrodev@astroshop.uv</b></p>
                    <p>Qualquer duvida é só chamar!</p>
                    <br/>
                </div>
            </div>

            <div className="footer-perfil">

                <p>Powered by Juliano Amaral</p>
                <div>
                <a href="https://github.com/JayGovinda13" target="_blank"><img src={github} alt="icon-github"/></a>
                <a href="https://www.linkedin.com/in/juliano-amaral-costa-898a80241/" target="_blank"><img src={linkedin} alt="icon-linkedin"/></a>
                </div>
            </div>
        </MainFooter>
    )
}

export default Footer