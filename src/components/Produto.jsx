import React from "react";
import { CarrinhoContext } from "../assets/produtos";

import "./Produto.css";

export default function Produto(props) {
  const { carrinho, setCarrinho } = React.useContext(CarrinhoContext);

  function adicionarProdutoNoCarrinho(nomeDoProduto) {    
    let novoCarrinho = {}
    Object.keys(carrinho).map(k=>{
      novoCarrinho[k] = carrinho[k];
      if(nomeDoProduto == k){
        novoCarrinho[k]+=1;
      }
    })

    if(carrinho[nomeDoProduto] == undefined) {
      novoCarrinho[nomeDoProduto] = 1;
    }


    setCarrinho(novoCarrinho);
    console.log(carrinho);
  }

  const produto = props.produto;
  return (
    <div className="produto">
      <img src={produto.imageUrl} alt="" />
      <div>{produto.name}</div>
      <div>R$ {produto.value}</div>
      <button
        onClick={() => {
          adicionarProdutoNoCarrinho(produto.name);
        }}
      >
        Adicionar no Carrinho
      </button>
    </div>
  );
}
