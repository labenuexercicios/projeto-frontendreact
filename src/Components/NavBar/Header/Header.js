import { HeaderContainer } from "./Header.styled";
import lupaIcon from "../../assets/imagemLupa.svg";
import productIcon from "../../assets/imagemProdutos.svg";
import cartIcon from "../../assets/imagemCarrinho.svg";

function Header(props) {
  const {
    goToCartScreen,
    goToProductsScreen,
    filterText,
    onChangeFilterText,
    order,
    onChangeOrder,
    priceOrder,
    onChangePriceOrder
  } = props;

  return (
    <HeaderContainer>
      <h1 className="tag">Space Renner</h1>
      <div>
        <span>
          <label> Ordernar Alfabetico: </label>
          <select value={order} onChange={onChangeOrder}>
            
            <option value="asc">Crescente</option>
            <option value="desc">Decrescente</option>
          </select>
          
          <label> Ordernar por Preço: </label>
          <select value={priceOrder} onChange={onChangePriceOrder}>
            
            <option value="asc">Crescente</option>
            <option value="desc">Decrescente</option>
          </select>
        </span>

        <input
          placeholder="Search"
          value={filterText}
          onChange={onChangeFilterText}
        />
        <button>
          <img src={lupaIcon} alt="lupa icon" />
        </button>
      </div>
      <div className="button-group">
        <button onClick={goToProductsScreen}>
          <img src={productIcon} alt="product icon" />
        </button>

        <button onClick={goToCartScreen}>
          <img className="imageCart" src={cartIcon} alt="cart icon" />
        </button>
      </div>
    </HeaderContainer>
  );
}
export default Header;