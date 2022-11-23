import { HeaderContainer } from "./Header.styled"
import searchIcon from "../../assets/search.svg"
import productIcon from "../../assets/product.svg"
// import cartIcon from "../../assets/cart.svg"
import cartIcon from "../../assets/carrinho-de-compras.png"


function Header(props) {
    const {
        goToCartScreen,
        goToProductsScreen,
        itemsInCart,
        filterText,
        onChangeFilterText
    } = props

    return (
        <HeaderContainer>
            <a>
                Loja de Brinquedo Espacial
                <h6>Desembarque nesta aventura!</h6>
            </a>

            <div>
                <input className="pesquisa-btn"
                    placeholder="Digite o que procura"
                    value={filterText}
                    onChange={onChangeFilterText} 
                />
                {/* <button>
                    <img src={searchIcon} alt="Search icon" />
                </button> */}
            </div>

            <div className="button-group">
                <button className="button-produtos" onClick={goToProductsScreen}>PRODUTOS
                    {/* <img src={productIcon} alt="Product icon" /> */}
                </button>

                <button onClick={goToCartScreen} className="cart-btn">
                    <img src={cartIcon} alt="Cart icon" />
                    {
                        itemsInCart > 0
                        && <span className="cart-badge">{itemsInCart}</span>
                    }
                </button>
            </div>
        </HeaderContainer>
    )
}

export default Header
