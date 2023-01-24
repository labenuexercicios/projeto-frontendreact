import { HeaderContainer } from "./Header.styled";
import SearchIcon from "../../assets/Search.svg";
import ProductsIcon from "../../assets/ProductsIcon.svg";
import cartIcon from "../../assets/Cart.svg";
import { queryAllByAltText } from "@testing-library/react";

function Header(props) {
  const {
    onChangequery,
    onChangeValorMin,
    onChangeValorMax,
    valorMax,
    valorMin,
    goToCartScreen,
    goToProductsScreen,
    query,
    setQuery,
    itemsInCart,
  } = props;

  return (
    <HeaderContainer>
      <h1>Victor's E-commerce</h1>

      <div>
        <input placeholder="Search"
          type= "text"
          value={props.query}
          onChange={onChangequery}
        
        />
        <button>
          <img src={SearchIcon} alt="Search" />
        </button>
      </div>

      <div>
        <input
          placeholder= "Minimo"
          type= "number"
          value= {props.valorMin}
          onChange={onChangeValorMin}
        />
      </div>
      <div>
        <input
          placeholder= "Maximo"
          type= "number"
          value= {props.valorMax}
          onChange={onChangeValorMax}
        />
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
