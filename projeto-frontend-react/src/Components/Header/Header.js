import { HeaderContainer } from "./style";
import logo from "../../img/logo.png";

export function Header(){
    return(
        <HeaderContainer>
            <img src={logo} alt="" />
            <h1>
                DEVSTAR SHOP
            </h1>
        </HeaderContainer>
    )
}