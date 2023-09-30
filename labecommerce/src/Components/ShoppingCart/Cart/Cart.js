import Items from "../Items/Items";
import { CartContainer } from "./CartStyle";

const Cart = ({ cart, setCart }) => {
    let total = 0;
  
    const removeItem = (id) => {
        const updatedCart = cart.filter((product) => product.id !== id);
        setCart(updatedCart);
      };
  
    return (
      <CartContainer>
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        {cart.map((products) => {
          total += products.value * products.amount;
          return (
            <div key={products.id}>
              <Items
                name={products.name}
                value={products.value}
                amount={products.amount}
              />
              <button onClick={() => removeItem(products.id)}>Remover</button>
            </div>
          );
        })}
        <p>Total: R$ {total.toFixed(2)}</p>
        </div>
      </CartContainer>
    );
  };
  
  export default Cart;