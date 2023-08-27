import Itens from "../Itens/Itens";
import { CarrinhoContainer } from "./styleCarrinho";


function Carrinho() {
  return (
    <CarrinhoContainer>
      <h1>Carrinho</h1>
      
      <label>x0 Nome do Produto</label>
      <button>remover</button>
      <label>x0 Nome do Produto</label>
      <button>remover</button>
      <label>x0 Nome do Produto</label>
      <button>remover</button>
      
      {/* <Itens /> */}
    </CarrinhoContainer>
  );
}

export default Carrinho;
