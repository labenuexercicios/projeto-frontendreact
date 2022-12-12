import { FaFacebook, FaInstagramSquare, FaTwitterSquare, FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa'
import { FooterSection } from './style'

function Footer() {
  return (
    <FooterSection>
      <div className='customer-information'>
        <div>
          <h4>Institucional</h4>
          <ul className='institutional-group'>
            <li>Sobre nossa empresa</li>
            <li>Nossas lojas</li>
            <li>Trabalhe conosco</li>
          </ul>
        </div>
        <div>
          <h4>Atendimento</h4>
          <ul className='support-client-group'>
            <li>Central de Atendimento</li>
            <li>Políticas de privacidade</li>
            <li>Compra segura</li>
          </ul>
        </div>
        <div className='social-midias'>
          <h4>Nossas redes sociais</h4>
          <FaFacebook size="50px"/>
          <FaInstagramSquare size="50px"/>
          <FaTwitterSquare size="50px"/>
          <FaYoutube size="50px"/>
        </div>
      </div>
      <div className='develop-by'>
        <span>Desenvolvido por Giovana Tiburtino.</span>
        <a href='https://github.com/giovanatiburtino'><FaGithub/></a>
        <a href='https://www.linkedin.com/in/giovana-ferreira-tiburtino-475486216/'><FaLinkedin/></a>
      </div>
    </FooterSection>
  )
}

export default Footer;