import { HeaderStyled } from "./Style"
import { HeaderCenterDiv } from "./Style"
import BrandLogo from "./brandLogo/BrandLogo"
import UserLogin from "./userLogin/UserLogin"
import GeneralItens from "./generalItens/GeneralItens"
import ZipCode from "./ZipCode/ZipCode"
import SearshInput from "./searshInput/SearshInput"

export default function Header() {

    return (
        <HeaderStyled>

            <BrandLogo/>
          
            <HeaderCenterDiv>             
                  
                    <SearshInput/>
                    <ZipCode/>
                    
            </HeaderCenterDiv>

            <UserLogin/>

            <GeneralItens/>

        </HeaderStyled>
    )   

} 

