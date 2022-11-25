import { FooterContainer, DivLeft, DivRight } from "./styles";

function Footer(props) {
  return (
    <FooterContainer className="footer">
      <DivLeft className="credits">
        Feito com ♡ em Labenu por Taís Zimerer
      </DivLeft>

      {/* <DivRight className="payment methods">
        <p></p>

        <img src="" alt="" />
      </DivRight> */}
    </FooterContainer>
  );
}

export default Footer;
