import { ProdutosContainer } from "./ProdutosStyle";

export function Produtos() {
  return (
    <ProdutosContainer>
      <img src="https://picsum.photos/536/354" />
      <h3>Produto 1</h3>
      <p>Preço: R$ 0,00</p>
      <button>Adicionar ao carrinho</button>
      <select>
        Quantidade:
        <option>Quantidade:</option>
        <option>01</option>
        <option>02</option>
        <option>03</option>
        <option>04</option>
        <option>05</option>
      </select>
    </ProdutosContainer>
  );
}
