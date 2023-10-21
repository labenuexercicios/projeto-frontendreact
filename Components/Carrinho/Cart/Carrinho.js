import Items from "../Itens/Item";
import { CartDiv } from "./CarrinhoStyled";

const Cart = (props) => {
  const SaveCartToLocalStorage = (cartNew) => {
    const cartJson = JSON.stringify(cartNew);
    localStorage.setItem("cart", cartJson);
  };

  const removeProduct = (product) => {
    let cartNew = "";
    if (product.quantity === 1) {
      cartNew = props.cart.filter((item) => {
        if (item.id === product.id) {
          return false;
        } else {
          return true;
        }
      });
      props.setCart(cartNew);
    } else {
      cartNew = props.cart.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });
      props.setCart(cartNew);
      SaveCartToLocalStorage(cartNew);
    }
    props.setAmount(props.amount - product.value);
  };

  const cartMapped =
    props.cart &&
    props.cart.map((item) => {
      return (
        <Items
          key={props.id}
          name={item.name}
          quantity={item.quantity}
          removeProduct={() => removeProduct(item)}
        />
      );
    });

  return (
    <CartDiv>
      <h2>Carrinho</h2>
      {cartMapped}
      <p>Valor Total:R${props.amount.toFixed(2)}</p>
    </CartDiv>
  );
};

export default Cart;
