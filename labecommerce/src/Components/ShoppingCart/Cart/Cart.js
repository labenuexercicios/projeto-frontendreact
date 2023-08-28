import Items from "../Items/Items";
import { CartContainer } from "./CartStyle";

const Cart = ({ cart, setCart }) => {
    let total = 0;
  
    const removeItem = (id) => {
        const updatedCart = cart.filter((product) => product.id !== id);
        setCart(updatedCart);
      };
  
    console.log("Current Cart:", cart); // Verifique o estado atual do carrinho
  
    return (
      <CartContainer>
        <h2>carrinho</h2>
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
      </CartContainer>
    );
  };
  
  export default Cart;