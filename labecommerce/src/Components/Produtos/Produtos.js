import React, { useState } from "react";
import { StyledProdutos } from "./ProdutosStyle";
import { StyledFiltro } from "./FiltroStyled"; // Corrigido o caminho
import img from  "../../Image/Produto/1.jpeg";
import img2 from "../../Image/Produto/2.jpeg";
import img3 from "../../Image/Produto/3.jpeg";
import img4 from "../../Image/Produto/4.jpeg";
import img5 from "../../Image/Produto/5.jpeg";
import img6 from "../../Image/Produto/6.jpeg";

export const ListaDeProdutos = (props) => {
  const [pesquisa, setPesquisa] = useState("");
  const [precoMinimo, setPrecoMinimo] = useState("");
  const [precoMaximo, setPrecoMaximo] = useState("");
  const [ordenacao, setOrdenacao] = useState("");
  const detalhes = [
    {
      nome: "Missão Espacial ZX-22 Astronauta no Foguete",
      categoria: "Missão Espacial",
      valor: 113.00,
      imagem: img,
    },
    {
      nome: "Conjunto Espaco Sideral - 4 Peças Soldade E Nave Satelite",
      categoria: "Missão Espacial",
      valor: 74.90,
      imagem: img2,
    },
    {
      nome: "Missão Espacial ZX-22 Astronauta na Nave",
      categoria: "Missão Espacial",
      valor: 60.00,
      imagem: img3,
    },
    {
      nome: "Estação Espacial Astronautas Missão Marte",
      categoria: "Missão Espacial",
      valor: 60.00,
      imagem: img4,
    },
    {
      nome: "Quebra Cabeça Mundo da Fantasia 60 Peças",
      categoria: "Educativo",
      valor: 50.00,
      imagem: img5,
    },
    {
      nome: "Blocos de Montar Estação Espacial - 511 Peças",
      categoria: "Blocos de Montar",
      valor: 199.00,
      imagem: img6,
    },
  ];

  const aplicarFiltrosEOrdenacao = () => {
    let produtosFiltrados = detalhes.slice();

    produtosFiltrados = produtosFiltrados.filter((produto) =>
      produto.nome.toLowerCase().includes(pesquisa.toLowerCase())
    );

    if (precoMinimo !== "") {
      produtosFiltrados = produtosFiltrados.filter(
        (produto) => produto.valor >= parseFloat(precoMinimo)
      );
    }

    if (precoMaximo !== "") {
      produtosFiltrados = produtosFiltrados.filter(
        (produto) => produto.valor <= parseFloat(precoMaximo)
      );
    }

    if (ordenacao === "precoCrescente") {
      produtosFiltrados.sort((a, b) => parseFloat(a.valor) - parseFloat(b.valor));
    } else if (ordenacao === "precoDecrescente") {
      produtosFiltrados.sort((a, b) => parseFloat(b.valor) - parseFloat(a.valor));
    }
    return produtosFiltrados;
  };

  return (
    <>
      <StyledFiltro>
        <input
          className="busca"
          placeholder="Aqui você encontra tudo :)"
          value={pesquisa}
          onChange={(event) => setPesquisa(event.target.value)}
        />
        <input
          className="valor"
          placeholder="Preço Mínimo $"
          type="number"
          value={precoMinimo}
          onChange={(event) => setPrecoMinimo(event.target.value)}
        />
        <input
          className="valor"
          placeholder="Preço Máximo $$$"
          type="number"
          value={precoMaximo}
          onChange={(event) => setPrecoMaximo(event.target.value)}
        />
        <label className="textoOrdem" htmlFor="ordenacao">
          Ordenar por:
        </label>
        <select
          className="ordem"
          id="ordenacao"
          value={ordenacao}
          onChange={(event) => setOrdenacao(event.target.value)}
        >
          <option value="">Padrão</option>
          <option value="precoCrescente">Preço Crescente</option>
          <option value="precoDecrescente">Preço Decrescente</option>
        </select>
        <button onClick={aplicarFiltrosEOrdenacao}>Aplicar Filtros</button> {/* Corrigido o nome da função aqui */}
      </StyledFiltro>

      <StyledProdutos>
        <div className="titulo">
          <h1 className="titulos">PRODUTOS</h1>
        </div>
        <div className="produtos">
          {aplicarFiltrosEOrdenacao().map((produto, index) => (
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
                <button>Adicionar ao carrinho</button>
                <a href="#" className="btn">
                  Visualizar
                </a>
              </div>
            </div>
          ))}
        </div>
      </StyledProdutos>
    </>
  );
};
