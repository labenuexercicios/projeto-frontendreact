import { SideBarCart } from "./CartScreen.styled";
import wallet from "../../assets/wallet-icon.png"
import { Main } from "./CartScreen.styled";
import trash from "../../assets/trash-delete.png"
import { Footer } from "./CartScreen.styled"
import GitHub from "../../assets/github.png"
import Linkedin from "../../assets/linkedin-icon.png"
import heart from "../../assets/heart-icon.png"

function CartScreen(props) {

  const {

    cart,
    addToCart,
    isOnProductsScreen,
    isOnCartScreen,
    increaseQuantityInCart,
    decreaseQuantityInCart,
    deleteFromCart

  } = props


  const total = cart.reduce(
    (acc, product) => product.price * product.quantity + acc,
    0
  )

  return (

    <div>
      <SideBarCart>

        <h3>Valor total: R${total} </h3>
        <button>
          <img src={wallet} alt="cart icon" />
        </button>

      </SideBarCart>

      {cart.map((product) => (
        <Main key={product.id}
          increaseQuantityInCart={increaseQuantityInCart}
          decreaseQuantityInCart={decreaseQuantityInCart}
          deleteFromCart={deleteFromCart}
        >
          <h3>{product.name}</h3>
          <div className="product-container">
            <img src={product.imageUrl} alt={product.imageAlt} />
            <h4>{product.description}</h4>
          </div>
          <div className="cart-price-icon">
            <span> R$ {product.price}</span>
            {
                        isOnCartScreen && product.quantity > 1
                        && <button
                                onClick={() => decreaseQuantityInCart(product)}
                        >
                            -
                        </button> 
                    }
                    {
                        isOnCartScreen
                        && <button
                            onClick={() => increaseQuantityInCart(product)}
                        >
                            +
                        </button> 
                    }

                    {
                        isOnProductsScreen
                        && <button onClick={() => addToCart(product)}>+ Add to cart</button>
                    }
                    {
                        isOnCartScreen
                        && <span>Qtd: {product.quantity}</span>
                    }
            <button
              onClick={() => deleteFromCart(product)}>
              <img src={trash} alt="trash icon" />
            </button>
          </div>
        </Main>
      ))}


          <Footer>
                    <p>Criado com <span><img src={heart} alt="icon heart"/></span> por Raissa</p>
                    <a href="https://github.com/raissabaeta" target="_blank">
                        <img src={GitHub} alt="icon github"/>
                    </a>
                    <a href="https://www.linkedin.com/in/raissa-baeta/" target="_blank">
                        <img className="linkedin-icon" src={Linkedin} alt="icon linkedin"/>
                    </a>
           </Footer>
    </div>
  );
}

export default CartScreen;