import logoHeader from "../../assents/image/logoHeader.png"
// import fundoHeader from "../../assents/image/fundoHeader.jpg"
import { HeaderContainer } from "./styleHeader"

function Header(){
  return(
    <div>
      <HeaderContainer>
      <img src={logoHeader} alt="Logo da página"/>
      </HeaderContainer>
    </div>
  )
}

export default Header