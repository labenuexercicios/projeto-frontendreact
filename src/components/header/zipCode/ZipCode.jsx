import { ContainerStyled } from "./Style";
import { ZipCodeImgStyled } from "./Style";
import { ZipCodeButtonStyled } from "./Style";

import ZipCodeImg from "../../../../public/Img/General/ZipCode.png";

export default function ZipCode() {
  return (
    <ContainerStyled>
      <ZipCodeImgStyled src={ZipCodeImg} />
      <ZipCodeButtonStyled>Zip Code</ZipCodeButtonStyled>
    </ContainerStyled>
  );
}
