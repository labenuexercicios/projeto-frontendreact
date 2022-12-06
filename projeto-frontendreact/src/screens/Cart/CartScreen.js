import { SideBarCart } from "./CartScreen.styled";
import cartIcon from "../../assets/cart-white.png"
import wallet from "../../assets/wallet-icon.png"
import { Main } from "./CartScreen.styled";

function CartScreen(props) {

const { cart } = props


const total = cart.reduce(
  (acc, product) => product.price * product.quantity + acc,
  0
)

  return (

    <div>
      <SideBarCart>
      <button>
          <img src={wallet} alt="cart icon"/>
        </button>
        <h3>Valor total: R${total} </h3>
      </SideBarCart>

      {cart.map((product)=> (
        <Main key={product.id}>       
          <h3>{product.name}</h3>
          <div className="product-container">
              <img src={product.imageUrl} alt={product.imageAlt} />
              <h4>{product.description}</h4>
          </div>
          <div className="cart-price-icon">
              <span> R$ {product.price}</span>
          </div>
        </Main>  
        ))}
  </div>
  );
}

export default CartScreen;