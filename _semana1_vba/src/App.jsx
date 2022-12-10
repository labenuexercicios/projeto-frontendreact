import Router from "./routes/Router";
import { GlobalStyle } from "./GlobalStyle";
import { useState } from "react";
import { GlobalContext } from "./contexts/GlobalContext";
import produtos from "../src/assets/produtos.json";
import { useEffect } from "react";


export default function App() {
  const [carrinho, setCarrinho] = useState([]);
  const [filtroTexto, setFiltroTexto] = useState("");
  const [filtroOrdenar, setFiltroOrdenar] = useState("");
  const [quantidade, setQuantidade] = useState(0);
  const [valorMin, setValorMin] = useState("");
  const [valorMax, setValorMax] = useState("");

  const adicionarAoCarrinho = (produtoAdicionar) => {
    const novoCarrinho = [...carrinho];

    const produtoEncontrado = novoCarrinho.find(
      (produtoNoCarrinho) => produtoNoCarrinho.id === produtoAdicionar.id
    );

    if (!produtoEncontrado) {
      const novoProduto = {
        ...produtoAdicionar,
        quantidade: 1,
      };
      setQuantidade(quantidade + 1);
      novoCarrinho.push(novoProduto);
    } else {
      setQuantidade(quantidade + 1);
      produtoEncontrado.quantidade++;
    }
    setCarrinho(novoCarrinho);
    localStorage.setItem("carrinho", JSON.stringify(novoCarrinho));
    localStorage.setItem("quantidade", JSON.stringify(quantidade));
  };

  const adicionarQuantidadeCarrinho = (produtoASomar) => {
    const novoCarrinho = [...carrinho];
    const produtoEncontrado = novoCarrinho.find(
      (produtoNoCarrinho) => produtoNoCarrinho.id === produtoASomar.id
    );

    produtoEncontrado.quantidade++;

    setQuantidade(quantidade + 1);
    setCarrinho(novoCarrinho);
    localStorage.setItem("carrinho", JSON.stringify(novoCarrinho));
    localStorage.setItem("quantidade", JSON.stringify(quantidade));
  };

  const diminuiQuantidadeNoCarrinho = (produtoADiminuir) => {
    const novoCarrinho = [...carrinho];
    const produtoEncontrado = novoCarrinho.find(
      (produtoNoCarrinho) => produtoNoCarrinho.id === produtoADiminuir.id
    );

    produtoEncontrado.quantidade--;

    setQuantidade(quantidade - 1);
    setCarrinho(novoCarrinho);
    localStorage.setItem("carrinho", JSON.stringify(novoCarrinho));
    localStorage.setItem("quantidade", JSON.stringify(quantidade));
  };
  const deletaDoCarrinho = (produtoADeletar) => {
    const novoCarrinho = [...carrinho];

    const indexEncontrado = novoCarrinho.findIndex(
      (produtoNoCarrinho) => produtoNoCarrinho.id === produtoADeletar.id
    );

    setQuantidade(quantidade - carrinho[indexEncontrado].quantidade);
    novoCarrinho.splice(indexEncontrado, 1);
    setCarrinho(novoCarrinho);
    localStorage.setItem("carrinho", JSON.stringify(novoCarrinho));
    localStorage.setItem("quantidade", JSON.stringify(quantidade-1));
  };

  const atualizaValorMin = (e) => {
      setValorMin(e.target.value);
  };

  const atualizaValorMax = (e) => {
    setValorMax(e.target.value);
};

  const atualizaFiltroTexto = (e) => {
    setFiltroTexto(e.target.value);
  };

  const atualizaFiltroOrdenar = (e) => {
    setFiltroOrdenar(e.target.value);
  };

  const limparPesquisa = () => {
    setFiltroTexto("");
    setFiltroOrdenar("");
    setValorMax("");
    setValorMin("");
  };

  useEffect(() => {
    if (carrinho.length > 0) {
      localStorage.setItem("carrinho", JSON.stringify(carrinho));
    }
  }, [carrinho]);

  useEffect(() => {
    const listaJson = JSON.parse(localStorage.getItem("carrinho"));
    if (listaJson) {
      setCarrinho(listaJson);
    }
  }, []);

  useEffect(() => {
    if (quantidade > 0) {
      localStorage.setItem("quantidade", JSON.stringify(quantidade));
    }
  }, [quantidade]);

  useEffect(() => {
    const listaJson = JSON.parse(localStorage.getItem("quantidade"));
    if (listaJson) {
      setQuantidade(listaJson);
    }
  }, []);

  const context = {
    carrinho,
    setCarrinho,
    adicionarAoCarrinho,
    adicionarQuantidadeCarrinho,
    diminuiQuantidadeNoCarrinho,
    deletaDoCarrinho,
    filtroTexto,
    filtroOrdenar,
    atualizaFiltroTexto,
    atualizaFiltroOrdenar,
    limparPesquisa,
    produtos,
    quantidade,
    valorMin,
    valorMax,
    atualizaValorMin,
    atualizaValorMax,
  };

  return (
    <>
      <GlobalContext.Provider value={context}>
        <GlobalStyle />
        <Router />
      </GlobalContext.Provider>
    </>
  );
}
