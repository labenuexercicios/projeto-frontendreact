import React from "react";
import { GlobalStyle, Papaidabagunca } from "./GlobalStyle";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Filtro from "./components/Filtro/Filtro";
import Carrinho from "./components/Carrinho/Carrinho";
import produtos from "./produtos.json";
import CardProdutos from "./components/Card.js/CardProdutos";
import { useState } from "react";
import { GlobalContext } from "./components/contexts/GlobalContext";

function App() {
  const [filtroNome, setFiltroNome] = useState("");
  const [filtroOrdenado, setFiltroOrdenado] = useState("");
  const [valorMinimo, setValorMinimo] = useState(0);
  const [valorMaximo, setValorMaximo] = useState(9999);
  const [lista, setLista] = useState([]);
  const [compra, setCompra] = useState({});
  const [quantidade, setQuantidade] = useState(0);

  //botao home pra entrar no carrinho
  const [pageTela, setPageTela] = useState(1);

  const trocarTela = (tela) => {
    if (tela === 1) {
      return pageTela === 1 ? setPageTela(2) : setPageTela(1);
    } else {
      return pageTela === 2 ? setPageTela(1) : setPageTela(2);
    }
  };

  //caarrinho

  const addBrinquedo = (brinquedoAAdicionar) => {
  const novaLista = [...lista]
   
    console.log("listanova",lista)
    console.log(brinquedoAAdicionar.id)

    const brinquedoEncontrado = lista.find(
   
      
      (brinquedoNoCarrinho) =>

      
      brinquedoNoCarrinho.id === brinquedoAAdicionar.id
    );
   

    if (!brinquedoEncontrado) {
      const novobrinquedo = {
        ...brinquedoAAdicionar,
        quantidade: 1,
      };
      setQuantidade(quantidade+1);
      novaLista.push(novobrinquedo);
    } else {
     
      brinquedoEncontrado.quantidade++;

    }
    setLista(novaLista)
    localStorage.setItem("carrinho", JSON.stringify(addBrinquedo));
  };


  const addQuantidade = (id) => {
    const brinquedoAdicionado = lista.find((xxx) => xxx.id === id);
    brinquedoAdicionado.quantidade += 1;
    return   setQuantidade(brinquedoAdicionado.quantidade)
  };

  const diminuirQuantidade = (id) => {
    const brinquedoAdicionado = lista.find((xxx) => xxx.id === id);
    brinquedoAdicionado.quantidade -= 1;
    return   setQuantidade(brinquedoAdicionado.quantidade)
  };




  // const colocaAoCarro = (pacoteAAdicionar) => {
  //   const novoCarro = [...lista];

  //   const produtoLocalizado = novoCarro.find(
  //     (pacotesNoCarro) => pacotesNoCarro.id === pacoteAAdicionar.id
  //   );

  //   if (!produtoLocalizado){
  //     const novoProduto = {
  //       ...pacoteAAdicionar,
  //       quantidade:1
  //     };
  //     setQuantidade(quantidade+1);
  //     novoCarro.push(novoProduto);
  //   }else{
  //     setQuantidade(quantidade+1)
  //     produtoLocalizado.quantidade++;
  //   }

  //   setLista(novoCarro);
  //   localStorage.setItem("carrinho",JSON.stringify((novoCarro)))
  //   localStorage.setItem("quantidade",JSON.stringify((quantidade)))

  // };

  // const QuantidadeNoCarro = (pacoteASomar) => {
  //   const novoCarro = [...lista];
  //   const produtoLocalizado = novoCarro.find(
  //     (pacotesNoCarro) => pacotesNoCarro.id === pacoteASomar.id
  //   );

  //   produtoLocalizado.quantidade++;

  //   setQuantidade(quantidade+1);
  //   setLista(novoCarro);
  //   localStorage.setItem("carrinho", JSON.stringify(novoCarro));
  //   localStorage.setItem("quantidade", JSON.stringify(quantidade));

  // };

  // const RetirarQuantidadeCarro = (produtoRetirar) => {
  //   const novoCarro = [...lista];
  //   const produtoLocalizado = novoCarro.find(
  //     (pacotesNoCarro) => pacotesNoCarro.id === produtoRetirar.id
  //   );
  //   produtoLocalizado.quantidade--;

  //   setQuantidade(quantidade-1);
  //   setLista(novoCarro);
  //   localStorage.setItem("carrinho", JSON.stringify(novoCarro));
  //   localStorage.setItem("quantidade", JSON.stringify(quantidade));

  // }

  // const ApagarCarro = (pacoteApagar) => {
  //   const novoCarro = [...lista];
  //   const listaAchada = novoCarro.findIndex(
  //     (pacotesNoCarro) => pacotesNoCarro.id === pacoteApagar.id
  //   );
  //   setQuantidade(quantidade-lista[listaAchada].quantidade)
  //   novoCarro.splice(listaAchada,1);
  //   setLista(novoCarro);
  //   localStorage.setItem("carrinho",JSON.stringify(novoCarro));
  //   localStorage.setItem("quantidade",JSON.stringify(quantidade-1));
  // }

  const context = {
    
    setLista,
    setCompra,
    setFiltroNome,
    setValorMaximo,
    setValorMinimo,
    setQuantidade,
    setFiltroOrdenado,
    addQuantidade,
    diminuirQuantidade,
    addBrinquedo,
  };

  return (
    <>
      <GlobalContext.Provider value={context}>
        {pageTela === 1 ? (
          <div className="papaiDeTodos">
            <GlobalStyle />

            <Header
              filtroNome={filtroNome}
              setFiltroNome={setFiltroNome}
              pageTela={pageTela}
              setPageTela={setPageTela}
              trocarTela={trocarTela}
            />

            <Papaidabagunca>
              <div className="filtrozinho">
                <Filtro
                  filtroOrdenado={filtroOrdenado}
                  setFiltroOrdenado={setFiltroOrdenado}
                  valorMinimo={valorMinimo}
                  setValorMinimo={setValorMinimo}
                  valorMaximo={valorMaximo}
                  setValorMaximo={setValorMaximo}
                  lista={lista}
                  setLista={setLista}
                  compra={compra}
                  setCompra={setCompra}
                />
              </div>
              

              <div className="cardzinho">
             
             
                {produtos

                  .filter((item) => {
                    return item.nome
                      .toLowerCase()
                      .includes(filtroNome.toLowerCase());
                  })
                  //valor minimo e maximo

                  // .filter((item) => {
                  //   if (valorMinimo !== "" && valorMaximo !== 0) {
                  //     if (item.valor >= valorMinimo && item.valor <= valorMaximo) {
                  //       return item.valor;
                  //     }
                  //   } else if (valorMinimo === "" && valorMaximo === "") {
                  //     setValorMinimo(0);
                  //     setValorMaximo(9999);
                  //   }
                  // })

                  .filter((item) => {
                    return item.valor >= valorMinimo;
                  })
                  .filter((item) => {
                    return valorMaximo ? item.valor <= valorMaximo : item;
                  })
          
        
          


                  .sort((A, Z) => {
                    if (filtroOrdenado === "crescente") {
                      return A.nome.localeCompare(Z.nome);
                    } else if (filtroOrdenado === "decrescente") {
                      return Z.nome.localeCompare(A.nome);
                    } else if (filtroOrdenado === "ordenado") {
                      return A.id.localeCompare(Z.id);
                    }
                  })
                  //   switch (filtroOrdenado) {
                  //     case "crescente":
                  //       return item.nome.localeCompare(item2.nome);

                  //     case "decrescente":
                  //       return item2.nome.localeCompare(item.nome);

                  //     default:
                  //       return item
                  //   }

                  .map((item) => {
                    return (
                      <CardProdutos
                        key={item.id}
                        item={item}
                        // nome={item.nome}
                        // imagem={item.imagem}
                        // valor={item.valor}
                        // descricao={item.descricao}
                      />
                    );
                  })}
              </div>
            </Papaidabagunca>

            <Footer />
          </div>
        ) : (
          <>
            <GlobalStyle />

            <Header
              filtroNome={filtroNome}
              setFiltroNome={setFiltroNome}
              pageTela={pageTela}
              setPageTela={setPageTela}
              trocarTela={trocarTela}
            />
            <div className="carrinhozinho">
              <Carrinho
                lista={lista}
                setLista={setLista}
                pageTela={pageTela}
                setPageTela={setPageTela}
              />
            </div>
          </>
        )}
      </GlobalContext.Provider>
    </>
  );
}

export default App;
