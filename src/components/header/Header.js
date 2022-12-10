import { HeaderContainer } from "./Header.styled";
import SearchIcon from "../../assets/Search.svg";
import ProductsIcon from "../../assets/ProductsIcon.svg";
import cartIcon from "../../assets/Cart.svg";

function Header(props) {
  const {
    goToCartScreen,
    goToProductsScreen,
    filterText,
    onChangeFilterText,
    itemsInCart,
  } = props;

  return (
    <HeaderContainer>
      <h1>Victor's E-commerce</h1>

      <div>
        <input placeholder="Search"
          value={filterText}
          onChange={onChangeFilterText}
        
        />
        <button>
          <img src={SearchIcon} alt="Search" />
        </button>
      </div>
      <div className="buttonGroup">
        <button onClick={goToProductsScreen}>
          <img src={ProductsIcon} alt="Products icon" />
        </button>

        <button onClick={goToCartScreen}>
          <img src={cartIcon} alt="Cart Icon" />
          <span>{itemsInCart > 0 && itemsInCart}</span>
        </button>
      </div>
    </HeaderContainer>
  );
}

export default Header;
