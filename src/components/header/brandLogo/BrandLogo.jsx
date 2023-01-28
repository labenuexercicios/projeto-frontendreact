import { ContainerStyled } from "./Style";
import { LogoImgStyled } from "./Style";
import { LogoTextStyled } from "./Style";
import { MainLogoTextStyled } from "./Style";
import { SecondaryLogoTextStyled } from "./Style";
import { InnerContainerStyled } from "./Style";
import logo from "../../../../img/Logo/Logo.gif";

export default function BrandLogo() {
  return (
    <ContainerStyled>
      <InnerContainerStyled>
        <LogoImgStyled src={logo} alt=""></LogoImgStyled>

        <LogoTextStyled>
          <MainLogoTextStyled>OUTER SPACE</MainLogoTextStyled>
          <SecondaryLogoTextStyled>eCommerce</SecondaryLogoTextStyled>
        </LogoTextStyled>
      </InnerContainerStyled>
    </ContainerStyled>
  );
}
