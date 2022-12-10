import { FooterStyled } from "./styled";
import gitHub from "../../assets/gitHub.svg";
import linkedin from "../../assets/linkedin.svg";

export default function Footer() {
  return (
    <FooterStyled>
      <ul className="info-site">
        <h4>
          <strong>Deixe-nos ajudar você</strong>
        </h4>
        <li>Sua Conta</li>
        <li>Frete e Prazo de Entrega</li>
        <li>Devolução e Reembolso</li>
        <li>Ajuda</li>
      </ul>

      <div className="redes">
        <h2>Bárbara Amaral / 2022</h2>

        <a href="https://github.com/BarbaraAmaral27" target={"_blank"}>
          <img src={gitHub} alt="icone gitHub" rel="noopener noreferrer" />
        </a>
        <a href="https://www.linkedin.com/in/barbaramamaral/" target={"_blank"}>
          <img src={linkedin} alt="icone linkedin" rel="noopener noreferrer" />
        </a>
      </div>
      {/* <div className="lista-info"> */}
      <ul className="info-site">
        <h4>
          <strong>Formas de Pagamento</strong>
        </h4>
        <li>Cartão Crédito</li>
        <li>Cartão Débito</li>
        <li>Boleto</li>
        <li>Pix</li>
      </ul>

      {/* </div> */}
    </FooterStyled>
  );
}
