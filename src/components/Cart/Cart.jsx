import React, { useContext, useEffect } from "react";
import {
  BotaoLixo,
  BotaoQuantidade,
  BotoesQuantidade,
  ContainerBotao,
  DivCarrinho,
  DivItensCarrinho,
  Total,
} from "./cartStyled";
import lixo from "../../assets/lixo.svg";
import { GlobalContext } from "../../contexts/GlobalContext";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { goToCheckOutPage } from "../../routes/coordinator";

export function Cart() {
  const navigate = useNavigate();
  const context = useContext(GlobalContext);
  const { carrinho, setCarrinho, setComponentesCarrinho, componentesCarrinho } =
    context;

  //Adicionar itens no localStorage

  useEffect(() => {
    if (carrinho.length > 0) {
      const carrinhoString = JSON.stringify(carrinho)
      localStorage.setItem("carrinho", carrinhoString)
    }
  }, [carrinho])

  useEffect(() => {
    const novoCarrinho = JSON.parse(localStorage.getItem("carrinho"))
    if (novoCarrinho !== null) {
      setCarrinho(novoCarrinho)
    }
    setComponentesCarrinho({...componentesCarrinho, badge: true})
  }, [])

  //Cacular valor total do carrinho
  let valorTotal = 0;
  carrinho.map(
    (produto) => (valorTotal = valorTotal + produto.valor * produto.quantidade)
  );

  //Clicar para aumentar e diminuir a quantidade de um item do carrinho
  const onClickDiminuirQuantidade = (id) => {
    const i = carrinho.findIndex((item) => item.id === id);
    carrinho.map((produto) => {
      if (produto.quantidade > 1) {
        const novoCarrinho = [...carrinho];
        novoCarrinho[i] = {
          ...novoCarrinho[i],
          quantidade: novoCarrinho[i].quantidade - 1,
        };
        setCarrinho(novoCarrinho);
      } else {
        const carrinhoSemItem = carrinho.filter((item) => item.id !== id);
        setCarrinho(carrinhoSemItem);
      }
    });
  };

  const onClickAumentarQuantidade = (id) => {
    const i = carrinho.findIndex((item) => item.id === id);
    carrinho.map((produto) => {
      if (produto.quantidade < 10) {
        const novoCarrinho = [...carrinho];
        novoCarrinho[i] = {
          ...novoCarrinho[i],
          quantidade: novoCarrinho[i].quantidade + 1,
        };
        setCarrinho(novoCarrinho);
      } else {
        alert("Só é permitido comprar 10 itens de cada produto por pessoa");
      }
    });
  };

  //Deletar item do carrinho
  const onClickDeletar = (id) => {
    const carrinhoSemItem = carrinho.filter((item) => item.id !== id);
    setCarrinho(carrinhoSemItem);
    if (carrinho.length <= 1) {
      setComponentesCarrinho({ ...componentesCarrinho, badge: false });
      const arrayVazia = JSON.stringify([])
      localStorage.setItem("carrinho", arrayVazia)
    }
  };

  //Pegar itens adicionados no carrinho e mostrar na tela
  const adicionadoAoCarrinho = carrinho.map((produto) => {
    return (
      <DivItensCarrinho key={produto.id}>
        <img src={produto.img} width="100px" />
        <p>U${produto.valor},00</p>
        <ContainerBotao>
          <BotoesQuantidade>
            <BotaoQuantidade
              onClick={() => onClickDiminuirQuantidade(produto.id)}
            >
              -
            </BotaoQuantidade>
            <p>{produto.quantidade}</p>
            <BotaoQuantidade
              onClick={() => onClickAumentarQuantidade(produto.id)}
            >
              +
            </BotaoQuantidade>
          </BotoesQuantidade>
          <BotaoLixo onClick={() => onClickDeletar(produto.id)}>
            <img src={lixo} width="20px" />
          </BotaoLixo>
        </ContainerBotao>
      </DivItensCarrinho>
    );
  });



  return (
    <DivCarrinho>
      {adicionadoAoCarrinho}
      <Total>Total = U${valorTotal},00</Total>
      <Button
        colorScheme={"red"}
        borderRadius={0}
        onClick={() => {
          goToCheckOutPage(navigate);
        }}
      >
        Concluir compra
      </Button>
    </DivCarrinho>
  );
}
