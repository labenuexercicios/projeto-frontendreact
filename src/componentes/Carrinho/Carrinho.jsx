import Itens from "../Itens/Itens";
import { useEffect } from "react";
import { Container, Texto1 } from "../Filtro/FiltroStyle";
import { Texto2, Texto4 } from "./CarrinhoStyle";

function Carrinho(props) {
  const { cart, setCart } = props;

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
        localStorage.removeItem("cart");;
      }
      
    } else {
      existeProduto.quantity -= 1;
      setCart([...cart]);
    }

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
    } 
  }, [cart]);


  return (
    <Container>
      <Texto1>Carrinho</Texto1>
      <Itens cart={cart} handleRemoveFromCart={handleRemoveFromCart} />
      <Texto2>Valor total:<Texto4>R$ {calcularValorTotal(cart).toLocaleString('pt-BR')}</Texto4></Texto2>
    </Container>
  );
}

export default Carrinho;
