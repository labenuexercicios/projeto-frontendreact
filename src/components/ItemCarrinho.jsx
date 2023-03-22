import React from "react";
import { CarrinhoContext } from "../assets/produtos";
import "./Carrinho.css"
export default function ItemCarrinho(props) {
  const { carrinho, setCarrinho } = React.useContext(CarrinhoContext);
  const produto = props.produto;

  function removerProdutoCarrinho(nomeDoProduto) {
    let novoCarrinho = {};
    Object.keys(carrinho).map((k) => {
      novoCarrinho[k] = carrinho[k];
      if (nomeDoProduto == k) {
        novoCarrinho[k] -= 1;
        if (novoCarrinho[k] == 0) {
          delete novoCarrinho[k];
        }
      }


    });



    setCarrinho(novoCarrinho);
    console.log(carrinho);
  }

  return (
    <div className="itemCarrinho">
      <span>
        {produto.quantidade}x {produto.nome}{" "}
        
      </span>
      <button className="removeButton" onClick={() => {removerProdutoCarrinho(produto.nome)}}>Remover</button>
    </div>
  );
}
