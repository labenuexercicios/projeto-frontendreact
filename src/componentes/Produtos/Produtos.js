import { ProdutosCard } from "./styleProdutos";
// import mascara01 from "../Imagens/mascara01.png"

export function Produtos(props) {
  
  return (
    <ProdutosCard>
      
      <img src={props.imagem} alt="" />
      <h4>{props.nomeDoProduto}</h4>
      <p>R$ {props.preco}</p>
      <button>Adicionar carrinho</button>
    </ProdutosCard>
  );
}

export default Produtos;
