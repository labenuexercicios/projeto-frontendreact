import React, { useState } from "react";
import { StyledProdutos } from "./ProdutosStyle";
import Carrinho from "../Header/Carrinho";

const ListaDeProdutos = ({ detalhes, filtros }) => {
  const [carrinho, setCarrinho] = useState([]);

  const adicionarAoCarrinho = (produto) => {
    const produtoExistente = carrinho.find((item) => item.id === produto.id);
    if (produtoExistente) {
      // Se o produto já existe no carrinho, atualize a quantidade.
      const carrinhoAtualizado = carrinho.map((item) =>
        item.id === produto.id
          ? { ...item, quantidade: item.quantidade + 1 }
          : item
      );
      setCarrinho(carrinhoAtualizado);
    } else {
      // Se o produto não existe no carrinho, adicione-o com quantidade 1.
      const produtoComQuantidade = { ...produto, quantidade: 1 };
      setCarrinho([...carrinho, produtoComQuantidade]);
    }
  };

  const aplicarFiltrosEOrdenacao = () => {
    let produtosFiltrados = detalhes.slice();

    produtosFiltrados = produtosFiltrados.filter((produto) =>
      produto.nome.toLowerCase().includes(filtros.pesquisa.toLowerCase())
    );

    if (filtros.precoMinimo !== "") {
      produtosFiltrados = produtosFiltrados.filter(
        (produto) => produto.valor >= parseFloat(filtros.precoMinimo)
      );
    }

    if (filtros.precoMaximo !== "") {
      produtosFiltrados = produtosFiltrados.filter(
        (produto) => produto.valor <= parseFloat(filtros.precoMaximo)
      );
    }

    if (filtros.ordenacao === "precoCrescente") {
      produtosFiltrados.sort((a, b) => parseFloat(a.valor) - parseFloat(b.valor));
    } else if (filtros.ordenacao === "precoDecrescente") {
      produtosFiltrados.sort((a, b) => parseFloat(b.valor) - parseFloat(a.valor));
    }

    return produtosFiltrados;
  };

  const produtosFiltrados = aplicarFiltrosEOrdenacao();

  return (
    <StyledProdutos>
      <div className="titulo">
        <h1 className="titulos">PRODUTOS</h1>
      </div>
      <div className="produtos">
        {produtosFiltrados.map((produto, index) => (
          <div className="produto" key={index}>
            <a href="#">
              <div className="produto_img">
                <img src={produto.imagem} alt={produto.nome} />
              </div>
            </a>
            <div className="info_produto">
              <h1>{produto.nome}</h1>
              <p>{produto.categoria}</p>
              <p className="valor">R${produto.valor.toFixed(2)}</p>
            </div>
            <div className="botao">
              <button onClick={() => adicionarAoCarrinho(produto)}>
                Adicionar ao carrinho
              </button>
              <a href="#" className="btn">
                Visualizar
              </a>
            </div>
          </div>
        ))}
      </div>
      <Carrinho carrinho={carrinho} setCarrinho={setCarrinho} />
    </StyledProdutos>
  );
};

export default ListaDeProdutos;