import Itens from "../Itens/Itens";
import "./Carrinho.css";
import { useEffect } from "react";

function Carrinho(props) {
  const { amount, setAmount, cart, setCart } = props;

  const calcularValorTotal = (cart) => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };

  const handleRemoveFromCart = (product) => {
    const existeProduto = cart.find((item) => item.title === product.title);

    if (existeProduto.quantity === 1) {
      const novoCart = cart.filter((item) => item.title !== product.title);
      setCart(novoCart);

      if (cart.length === 1) {
        localStorage.removeItem("cart");
        setAmount(0);
      }
    } else {
      existeProduto.quantity -= 1;
      setCart([...cart]);
    }

    const novoValorTotal = calcularValorTotal(cart);
    setAmount(novoValorTotal);
  };

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));

    if (savedCart) {
      setCart(savedCart);
    } else {
      setCart([]);
    }
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));

      const novoValorTotal = calcularValorTotal(cart);
      setAmount(novoValorTotal);
    } else {
      setAmount(0);
    }
  }, [cart]);

  return (
    <div className="carrinho">
      <p>Carrinho</p>
      <Itens cart={cart} handleRemoveFromCart={handleRemoveFromCart} />
      <p>Total: R$ {amount.toFixed(2)}</p>
    </div>
  );
}

export default Carrinho;
