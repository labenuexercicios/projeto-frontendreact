import { Items } from "../Items/Items";
import { CartContainer } from "./CartStyle";

export function Cart(props) {
  
  const { cart, amount, id, name, value, imageUrl } = props.states
  const { setCart, setAmount } = props.handlers
  const { productsList } = props;
  const { deleteProductCart } = props;
  const { totalValue } = props;
  const { limparCarrinho } = props;

  const productsCart = cart.map((product) => (
    <CartContainer key={product.id}>
      <p>{product.nome}</p>
      <p>Qtd: {product.amount}</p>
      <p>{product.valor}</p>
      <button onClick={() => deleteProductCart(product)}>Remove</button>
    </CartContainer>
  ));

  return (
    <CartContainer>
      <h2>Carrinho</h2>
      <div>
          <p>Valor total: R$ {totalValue}, 00 </p>
      </div>
      <button onClick={limparCarrinho}>Limpar Carrinho</button>
      <Items cart={cart} amount={amount} id={id} name={name} value={value} imageUrl={imageUrl} deleteProductCart={deleteProductCart} productsCart={productsCart} />
    </CartContainer>
  );
}
