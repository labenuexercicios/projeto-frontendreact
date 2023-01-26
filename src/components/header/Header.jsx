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

export default function Header(props) {
  return (
    <HeaderStyled>
      <ItensStyled>
        <BrandLogo />
        <HeaderCenterDiv>
          <SearshInput />
          <ZipCode />
        </HeaderCenterDiv>
        <UserLogin />
        <GeneralItens />
      </ItensStyled>
      <NavStyled>
        <Nav categories={props.categories} />
      </NavStyled>
    </HeaderStyled>
  );
}
