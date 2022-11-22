import { FooterContainer, DivLeft, DivRight } from "./styles";

function Footer(props) {
  return (
    <FooterContainer className="footer">
      <DivLeft className="autor">
        Feito com ♡ em Labenu por Taís Zimerer
      </DivLeft>

      <DivRight className="formas-de-pagamento">
        <p></p>

        <img src="" alt="" />
      </DivRight>
    </FooterContainer>
  );
}

export default Footer;
