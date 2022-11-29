import { HeaderContainer } from "./Header.styled";
import cartIcon from "../../assets/shopping-cart.png";
import alien from "../../assets/alien.png"


function Header() {
    return (
      <HeaderContainer>
      <a>

      </a>

      <div>
        <input placeholder="Buscar"/>
        <button>
        <img src={alien} alt= "Alien Search Button"/>
        </button>
      </div>
      
      <button>
        <img src={cartIcon} alt = "Space Cart Icon" />
      </button>
      </HeaderContainer>
    );
  }
  
  export default Header;