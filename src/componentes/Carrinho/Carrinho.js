import CartItem from "./CartItem";
import { CarrinhoContainer } from "./styleCarrinho";


function Carrinho(props) {
  console.log(props.cart);
  return (
    <CarrinhoContainer>
      <h1>Carrinho</h1>
 
    {
      props.cart && 
      props.cart.map((item)=>
        <CartItem
          key={item.id}
          id={item.id}
          cart={props.cart}
          setCart={props.setCart}
          nome={item.nomeDoProduto}
          preco={item.preco}
          quantidade={item.quantidade}
        />
      )
    }
      
      
    </CarrinhoContainer>
  );
}

export default Carrinho;
