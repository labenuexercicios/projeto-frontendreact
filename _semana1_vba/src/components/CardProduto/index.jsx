import { useContext } from "react";
import iconeCarrinho from "../../assets/iconeCarrinho.svg";
import { GlobalContext } from "../../contexts/GlobalContext";
import { CardProdutoStyled } from "../CardProduto/styled";

export default function CardProduto({produto}) {

  const context = useContext(GlobalContext);
  const { adicionarAoCarrinho } = context;

  return (
    <CardProdutoStyled>
      <img className="imagem-produto" src={produto.imagem} alt={produto.nome} />
      <div className="descricao">
        <h3>{produto.nome}</h3>
        <h3>R$ {produto.valor.toFixed(2).replace(".", ",")}</h3>
      </div>
      <button className="button" onClick={() => adicionarAoCarrinho(produto)}>
        <span>Comprar</span>
      </button>
    </CardProdutoStyled>
  );
}
