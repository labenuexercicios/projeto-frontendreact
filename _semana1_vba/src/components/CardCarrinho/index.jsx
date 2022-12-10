import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { CardCarrinhoStyled } from "./styled";
import lixeira from "../../assets/lixeira.svg";

export default function CardCarrinho({ produto }) {
  const context = useContext(GlobalContext);
  const {
    adicionarQuantidadeCarrinho,
    diminuiQuantidadeNoCarrinho,
    deletaDoCarrinho,
  } = context;

  const totalPorItem = (produto.valor * produto.quantidade) 

  return (
    <CardCarrinhoStyled>
      <img className="imagem-produto" src={produto.imagem} alt={produto.nome} />

      <div className="itens-descricao">      
      <div className="descricao">
        <h3>{produto.nome}</h3>
        <h3>R$ {produto.valor.toFixed(2).replace(".", ",")}</h3>
      </div>
      <div className="buttons">
        {produto.quantidade > 1 && (
          <button
            className="button-quantidade"
            onClick={() => diminuiQuantidadeNoCarrinho(produto)}
          >
            -
          </button>
        )}
        {
          <button
            className="button-quantidade"
            onClick={() => adicionarQuantidadeCarrinho(produto)}
          >
            +
          </button>
        }
        {<span>Qtd: {produto.quantidade} (itens)</span>}
        <img
          className="button-delete"
          id="lixeira"
          src={lixeira}
          alt="lixeira"
          onClick={() => deletaDoCarrinho(produto)
          }
        />
        </div>
        
        {
          // <button
          //   className="button-delete"
          //   onClick={() => deletaDoCarrinho(produto)}
          // >
          //   Excluir
          // </button>
        
        }
      </div>
      
        <div className="total-item" >
        <h3>Subtotal R$ {totalPorItem.toFixed(2).replace(".", ",")}</h3>
        </div>
        
    </CardCarrinhoStyled>
  );
}
