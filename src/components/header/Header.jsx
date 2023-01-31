import { HeaderStyled } from "./Style";
import { HeaderCenterDiv } from "./Style";
import BrandLogo from "./brandLogo/BrandLogo";
import UserLogin from "./userLogin/UserLogin";
import GeneralItens from "./generalItens/GeneralItens";
import ZipCode from "./ZipCode/ZipCode";
import SearshInput from "./searshInput/SearshInput";
import Nav from "./nav/Nav";
import { ItensStyled } from "./Style";
import { NavStyled } from "./Style";
import { ItensContainerStyled } from "./Style";

export default function Header() {
  return (
    <HeaderStyled>
      <BrandLogo />

      <ItensContainerStyled>
        <ItensStyled>
          <HeaderCenterDiv>
            <SearshInput />
            <ZipCode />
          </HeaderCenterDiv>
          <UserLogin />
          <GeneralItens />
        </ItensStyled>

        <NavStyled>
          <Nav />
        </NavStyled>
      </ItensContainerStyled>
    </HeaderStyled>
  );
}
