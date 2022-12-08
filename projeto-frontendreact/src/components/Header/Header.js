import { HeaderContainer } from "./Header.styled";
import spaceShip from "../../assets/spaceship.png"
import searchIcon from "../../assets/search.svg"
import productsIcon from "../../assets/planeta.png"
import cartIcon from "../../assets/cart.svg"



function Header(props) {

    const { goToCartScreen,
        goToProductsScreen,
        itemsInCart, 
        buscaNome,

    } = props


        const onChangeNome = (e) => {
            props.setBuscaNome(e.target.value);
          };

    return (
      <HeaderContainer>
       <div className="logo-icon">
        <img src={spaceShip} alt="icon spaceship"/>
       </div>
       <div className="search">
            <input 
            placeholder="Busque seu planeta" 
            type="text" 
            value={buscaNome}
            onChange={onChangeNome}

            />
            <button>
                <img src={searchIcon} alt="Search icon" />
            </button>
       </div>
       <div className="button-group">
        <button onClick={goToProductsScreen}>
            <img src={productsIcon} alt="products icon"/>
        </button>

        <button onClick={goToCartScreen} className="cart-button">
            <img src={cartIcon} alt="cart icon"/>
            <span className="cart-badge">{itemsInCart}</span>
        </button>
       </div>
       
      </HeaderContainer>
    );
  }
  
  export default Header;
  