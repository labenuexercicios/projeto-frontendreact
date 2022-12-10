import { HeaderContainer } from "./Header.styled";
import SearchIcon from "../../assets/Search.svg";
import ProductsIcon from '../../assets/ProductsIcon.svg'
import cartIcon from "../../assets/Cart.svg";

function Header(props) {
  const { goToCartScreen, goToProductsScreen } = props;

  return (
    <HeaderContainer>
      <a>Victor's E-commerce</a>

      <div>
        <input placeholder="Search" />
        <button>
          <img src={SearchIcon} alt="Search" />
        </button>
      </div>
      <div className='buttonGroup'>
        <button onClick={goToProductsScreen}>
        <img src={ProductsIcon} alt='Products icon' />
      </button>

      <button onClick={goToCartScreen}>
        <img src={cartIcon} alt="Cart Icon" />
      </button>
      </div>
      
    </HeaderContainer>
  );
}

export default Header;
