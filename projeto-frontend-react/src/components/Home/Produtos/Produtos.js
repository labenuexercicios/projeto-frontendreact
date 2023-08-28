import { produtosLista } from "../../../assents/produtosLista";
import { ProdutosContainer } from "./ProdutosStyle";

export function Produtos(props) {
  return (
    <ProdutosContainer>
      <img src= {props.imageUrl} />
      <h3>{props.name}</h3>
      <p>Preço: R$ {props.value}</p>
           <select>
        Quantidade:
        <option>Quantidade:</option>
        <option>01</option>
        <option>02</option>
        <option>03</option>
        <option>04</option>
        <option>05</option>
      </select>
      <button>Adicionar ao carrinho</button>
    </ProdutosContainer>
  );
}
