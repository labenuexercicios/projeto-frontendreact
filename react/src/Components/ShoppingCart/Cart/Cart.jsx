import { Items } from "../Items/Items";
import { CartStyle, ParagraphStyle, TituloStyle } from "./CartStyle";

export function Cart({ amount, setAmount, cart, setCart }) {
  const remove = (id) => {
    cart.map((product) => {
      if (product.id === id && product.quantify >= 1) {
        product.quantify = product.quantify - 1;
        setCart([...cart]);
        setAmount(amount - product.value);
      }

      if (product.quantify === 0) {
        const newCart = cart.filter((product) => product.quantify !== 0);
        setCart(newCart);
      }
    });
  };

  return (
    <CartStyle>
      <TituloStyle>Carrinho</TituloStyle>
      {cart.map((product) => {
        return (
          <Items
            key={product.id}
            name={product.name}
            value={product.value}
            quantify={product.quantify}
            imageUrl={product.imageUrl}
            id={product.id}
            remove={remove}
          />
        );
      })}

      <ParagraphStyle>Valor Total= R${amount.toFixed(2)}</ParagraphStyle>
    </CartStyle>
  );
}
