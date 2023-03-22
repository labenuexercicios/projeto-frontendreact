import React from "react";
import { TODOS_PRODUTOS } from "../assets/produtos";
import Produto from "./Produto";
import { ProdutosContext } from "../assets/produtos";
import "./Produtos.css";




export default function Produtos() {
  // const produtosFiltrados = TODOS_PRODUTOS;
  const {produtosFiltrados, setProdutosFiltrados} = React.useContext(ProdutosContext);

  return (
    <div className="produtos">      
      <div className="cabecalho">
        <span>Quantidade de produtos: {produtosFiltrados.length}</span>
        <span>
          Ordenação:{" "}
          <select>
            <option value="">Crescente</option>
            <option value="">Decrescente</option>
          </select>
        </span>
      </div>
      <div className="listaProdutos">
        {produtosFiltrados.map((p, index) => {
          return <Produto produto={p}></Produto>;
        })}
      </div>
    </div>
  );
}
