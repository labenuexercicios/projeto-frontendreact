import { Items } from "../Items/Items";
import { CartContainer, CartItems, CartResume } from "./CartStyle";
// import { formatCurrency } from "../../../utils/formatCurrency.js":

export function Cart(props) {
  const { cart, amount, id, name, value, imageUrl } = props.states;
  const { setCart, setAmount } = props.handlers;
  const { productsList } = props;
  const { deleteProductCart } = props;
  const { totalValue } = props;
  const { cleanCart } = props;

  const productsCart = cart.map((product) => (
    <Items
      name={product.name}
      value={product.value}
      imageUrl={product.imageUrl}
      amount={product.amount}
      product={product}
      deleteProductCart={deleteProductCart}
    />
  ));

  return (
    <CartContainer className="cart--active">
      <h2>Carrinho</h2>
      <CartItems className="cart-items">{productsCart}</CartItems>

      <CartResume>
        <p>Total: R$ {totalValue}</p>
      </CartResume>
      <button onClick={cleanCart}>Limpar Carrinho</button>
    </CartContainer>
  );
}
