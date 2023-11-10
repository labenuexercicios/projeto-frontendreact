import CartItem from "./CartItem";
import { CarrinhoContainer } from "./styleCarrinho";



function Carrinho(props) {
  console.log(props.cart);
  const valorTotal = props.cart.reduce((acumulator, valorAtual)=>{
    return (valorAtual.preco * valorAtual.quantidade) + acumulator
  },0)
  const FormataMoeda = (valor) => {
    if (valor > 0) {
      let numberFormat = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(valor);
      return numberFormat;
    }
  };
  const novoValor = FormataMoeda(valorTotal)
  return (
    <CarrinhoContainer>
      <h1>Carrinho</h1>
      <p>Valor total do carrinho: {novoValor}</p>
      
 
    {
      props.cart && 
      props.cart.map((item)=>
        <CartItem
          key={item.id}
          id={item.id}
          cart={props.cart}
          setCart={props.setCart}
          nome={item.nomeDoProduto}
          preco={FormataMoeda(item.preco)}
          quantidade={item.quantidade}
        />
      )
    }      
    <button className="btComprar">Comprar agora</button>
   
    </CarrinhoContainer>
  );
}

export default Carrinho;