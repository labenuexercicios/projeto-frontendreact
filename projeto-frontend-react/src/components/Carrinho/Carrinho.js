import { Itens } from "./Itens/Itens";
import { CarrinhoContainer } from "./CarrinhoStyle"

export function Carrinho(props) {
  return (
    <CarrinhoContainer>
      <h2>Carrinho</h2>
      <Itens />
    </CarrinhoContainer>
  );
}
