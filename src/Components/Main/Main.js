import React, { useState, useEffect } from "react";
import { Filtro } from "./Components/Aside/Aside";
import { Carro } from "./Components/Carrinho/Carro";
import { produtos } from "../../produtos";
import { Header } from "./Header/Header";
import {
  MainSpace,
  DivProdutos,
  EstiloLista,
  ImagemProduto,
  MainStyle,
} from "./styled";

export function Main() {
  const [precoMin, setPrecoMin] = useState("");
  const [precoMax, setPrecoMax] = useState("");
  const [verificaNome, setVerificaNome] = useState("");
  const [carrinho, setCarrinho] = useState([]);
  const [abreCarrinho, setAbreCarrinho] = useState(0);
  const [ordenacao, setOrdenacao] = useState("");
  const [valorTotal, setValorTotal] = useState(0);

  console.log(typeof valorTotal);

  const somaValorTotal = (array) => {
    // função criada para somar o valor total dos produtos dentro do carrinho
    array?.length > 0 // ternário para verificar se tem algum item no carrinho
      ? setValorTotal(
          array.reduce(
            // Se tiver ele faz o reduce q é um metodo do JS para somar valores escolhidos de um array
            (carro, item) => Number(carro + item.preco * item.qtd),
            []
          )
        )
      : setValorTotal(0); // Se não tiver o valor sera igual a zero
  };

  const setItem = () => {
    const guardaItem = JSON.stringify(carrinho);
    localStorage.setItem("produtosGuardados", guardaItem);
  };

  const getItem = () => {
    const pegaItem = JSON.parse(localStorage.getItem("produtosGuardados"));
    if (pegaItem?.length > 0) {
      return setCarrinho(pegaItem);
    }
  };

  //Função que verifica se o estado do carrinho está para 1 ou 0 e altera para fazer renderização condicional do carrinho (div)

  const adicionaCarrinho = (item) => {
    //Cópia do carrinho usando spread operator
    const copiaDoCarrinho = [...carrinho];

    //Variavel utilizando find para encontrar se existe dentro do carrinho um produto com o mesmo nome "O nome é a propriedade do objeto, mas podemos usar outras, como por exemplo ID"
    const verificaCopiadoCarrinho = copiaDoCarrinho.find(
      (produto) => produto.nome === item.nome
    );

    //Condição para criar o item no carrinho caso a váriavel acima não encontre "e retorne False"
    if (!verificaCopiadoCarrinho) {
      copiaDoCarrinho.push({
        nome: item.nome,
        preco: item.preco,
        imagem: item.imagem,
        id: item.id,
        qtd: item.qtd,
      });
      setCarrinho(copiaDoCarrinho);
    }

    //Condição para alterar apenas a quantidade do objeto quando a Váriavel encontrar o objeto no carrinho.
    else {
      verificaCopiadoCarrinho.qtd = verificaCopiadoCarrinho.qtd + 1;
      setCarrinho(copiaDoCarrinho);
    }
  };
  useEffect(() => {
    getItem();
  }, []);
  useEffect(() => {
    setItem();
    somaValorTotal(carrinho);
  }, [carrinho]);

  // RENDERIZAÇÃO CONDICIONAL ABAIXO COM BASE NO ESTADO DO CARRINHO

  //RETORNA TELA COM CARRINHO ABERTO
  if (abreCarrinho === 1) {
    return (
      <>
        <MainSpace>
          <Header
            abreCarrinho={abreCarrinho}
            setAbreCarrinho={setAbreCarrinho}
          />
          <>
            {/* Renderização dos produtos abaixo */}
            <MainStyle>
              {produtos
                .sort((a, b) => {
                  if (ordenacao.toLowerCase() === "crescente") {
                    if (a.preco < b.preco) {
                      return -1;
                    }
                  }
                  if (ordenacao.toLowerCase() === "decrescente") {
                    if (a.preco > b.preco) {
                      return -1;
                    }
                  }
                })
                .filter((produto) => {
                  return produto.nome
                    .toLocaleLowerCase()
                    .includes(verificaNome.toLocaleLowerCase());
                })
                .filter((produto) => {
                  return produto.preco >= precoMin;
                })
                .filter((produto) => {
                  return produto.preco <= precoMax || precoMax === "";
                })
                .map((produto, index) => {
                  return (
                    <DivProdutos key={index}>
                      <EstiloLista>
                        <ImagemProduto src={produto.imagem} />
                        <li>{produto.nome}</li>
                        <li>R$ {produto.preco},00</li>
                      </EstiloLista>
                      <button onClick={() => adicionaCarrinho(produto)}>
                        Adicionar ao carrinho
                      </button>
                    </DivProdutos>
                  );
                })}
            </MainStyle>
          </>
            <Carro
              valorTotal={valorTotal}
              carrinho={carrinho}
              setCarrinho={setCarrinho}
            />
        </MainSpace>

      </>
    );
  }

  // RETORNA TELA COM CARRINHO FECHADO
  if (abreCarrinho === 0) {
    return (
      <>
        <Header abreCarrinho={abreCarrinho} setAbreCarrinho={setAbreCarrinho} />
        <MainSpace>
          <Filtro
            ordenacao={ordenacao}
            setOrdenacao={setOrdenacao}
            precoMin={precoMin}
            setPrecoMin={setPrecoMin}
            precoMax={precoMax}
            setPrecoMax={setPrecoMax}
            verificaNome={verificaNome}
            setVerificaNome={setVerificaNome}
          />
          <>
            {/* Renderização dos produtos abaixo */}
            <MainStyle>
              {produtos
                .sort((a, b) => {
                  if (ordenacao.toLowerCase() === "crescente") {
                    if (a.preco < b.preco) {
                      return -1;
                    }
                  }
                  if (ordenacao.toLowerCase() === "decrescente") {
                    if (a.preco > b.preco) {
                      return -1;
                    }
                  }
                })
                .filter((produto) => {
                  return produto.nome
                    .toLocaleLowerCase()
                    .includes(verificaNome.toLocaleLowerCase());
                })
                .filter((produto) => {
                  return produto.preco >= precoMin;
                })
                .filter((produto) => {
                  return produto.preco <= precoMax || precoMax === "";
                })
                .map((produto, index) => {
                  return (
                    <DivProdutos key={index}>
                      <EstiloLista>
                        <ImagemProduto src={produto.imagem} />
                        <li>{produto.nome}</li>
                        <li>R$ {produto.preco},00</li>
                      </EstiloLista>
                      <button onClick={() => adicionaCarrinho(produto)}>
                        Adicionar ao carrinho
                      </button>
                    </DivProdutos>
                  );
                })}
            </MainStyle>
          </>
        </MainSpace>

      </>
    );
  }
}
