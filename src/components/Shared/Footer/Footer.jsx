import { FooterContainer } from "./styles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <FooterContainer>
      <div className="text-area">
        <div>
        <h2>Sobre nós</h2>
        <p>Sobre a empresa</p>
        <p>Onde estamos</p>
        <p>Acordos intergalacticos</p>
        <p>Faça parte do time</p>
        <h2>Siga-nos</h2>
        <div className="socials">
        <FontAwesomeIcon icon="fa-brands fa-facebook" />
        <FontAwesomeIcon icon="fa-brands fa-twitter" />
        <FontAwesomeIcon icon="fa-brands fa-square-instagram" />
        <FontAwesomeIcon icon="fa-brands fa-linkedin" />
        </div>
        </div>
        <div>
        <h2>Atendimento</h2>
        <p>Canais de atendimento</p>
        <p>Denuncias</p>
        <p>Política de privacidade</p>
        <p>Política de devolução</p>
        </div>
        <div>
        <h2>Parcerias</h2>
        <p>Seja um fornecedor</p>
        <p>Guia para frete inter-galático</p>
        <p>Ajuda</p>
        </div>
        <div>
        <h2>Central de Vendas</h2>
        <h2>0800 01 234 567</h2>
        <p>Atendimentos de Segunda à Sexta</p>
        <p>das 07:00 até as 18:00</p>
        <p>Atendemos nos feriados</p>
        </div>
        <img src="./images/payment.png" alt="pay options"/>
      </div>
      <div className="my-info">
        <a href="https://www.linkedin.com/in/fernando-cattani-b0997b237/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon="fa-brands fa-linkedin-in" /></a>
        <p>Fernando Cattani de Castro / 2023</p>
        <a href="https://github.com/Fccastro" target="_blank" rel="noreferrer"><FontAwesomeIcon icon="fa-brands fa-github" /></a>
      </div>
    </FooterContainer>
  )
}

export default Footer
