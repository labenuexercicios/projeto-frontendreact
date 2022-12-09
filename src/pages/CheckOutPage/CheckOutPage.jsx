import {
  Button,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  Stack,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import { GlobalContext } from "../../contexts/GlobalContext";
import { goToHomePage } from "../../routes/coordinator";
import {
  Carrinho,
  Container,
  DivItensCarrinho,
  Entrega,
  NavStyled,
  TituloCarrinho,
  TituloEntrega,
  BotaoLixo,
  BotaoQuantidade,
  BotoesQuantidade,
  ContainerBotao,
  DivTotalBotao,
} from "./CheckOutPageStyled";
import lixo from "../../assets/lixo.svg";
import Footer from "../../components/Footer/Footer";
import { useState } from "react";

const CheckOutPage = () => {
  const navigate = useNavigate();
  const context = useContext(GlobalContext);
  const { carrinho, setCarrinho, componentesCarrinho, setComponentesCarrinho } =
    context;

  //Adicionar itens no localStorage
  useEffect(() => {
    if (carrinho.length > 0) {
      const carrinhoString = JSON.stringify(carrinho);
      localStorage.setItem("carrinho", carrinhoString);
    }
  }, [carrinho]);

  useEffect(() => {
    const novoCarrinho = JSON.parse(localStorage.getItem("carrinho"));
    if (novoCarrinho !== null) {
      setCarrinho(novoCarrinho);
    }
    setComponentesCarrinho({ ...componentesCarrinho, badge: true });
  }, []);

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
      const arrayVazia = JSON.stringify([]);
      localStorage.setItem("carrinho", arrayVazia);
    }
  };

  // Exibir itens do carrinho na página
  const exibirCarrinho = carrinho.map((produto) => {
    return (
      <DivItensCarrinho key={produto.id}>
        <img src={produto.img} width="100px" />
        <div>
          <p>{produto.destino}</p>
          <p>U${produto.valor},00</p>
        </div>

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

  const onClickFinalizarPedido = () => {
    if (carrinho.length >= 1) {
      alert("Compra concluída com sucesso!");
      setCarrinho([]);
      const arrayVazia = JSON.stringify([]);
      localStorage.setItem("carrinho", arrayVazia);
      setComponentesCarrinho({ ...componentesCarrinho, divCarrinho: false });
      goToHomePage(navigate);
    } else {
      alert(
        "Por favor, adicione algum item ao carrinho para concluir a compra."
      );
    }
  };

  return (
    <div>
      <Header />
      <NavStyled>
        <Button
          colorScheme={"blue"}
          onClick={() => {
            goToHomePage(navigate);
          }}
        >
          Voltar para página inicial
        </Button>
      </NavStyled>

      <Container>
        <Entrega>
          <TituloEntrega>
            <p>Entrega</p>
          </TituloEntrega>

          <Stack
            spacing={3}
            mx={"auto"}
            maxW={"lg"}
            py={8}
            px={4}
            borderBottom={"1px"}
            borderColor={"gray.200"}
          >
            <Stack spacing={3}>
              <HStack>
                <Box>
                  <FormControl id="nome" isRequired>
                    <FormLabel>Nome</FormLabel>
                    <Input type="text" />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="sobrenome" isRequired>
                    <FormLabel>Sobrenome</FormLabel>
                    <Input type="text" />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl id="endereco" isRequired>
                <FormLabel>Endereço</FormLabel>
                <InputGroup>
                  <Input type={"text"} />
                </InputGroup>
              </FormControl>
            </Stack>
          </Stack>

          <TituloEntrega>
            <p>Pagamento</p>
          </TituloEntrega>

          <Stack
            spacing={3}
            mx={"auto"}
            py={8}
            px={4}
            borderBottom={"1px"}
            borderColor={"gray.200"}
          >
            <Stack spacing={3}>
              <Box>
                <FormControl id="cartao" isRequired>
                  <FormLabel>Número do cartão</FormLabel>
                  <Input type="number" />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="codigo" isRequired>
                  <FormLabel>CVC</FormLabel>
                  <Input type="number" />
                </FormControl>
              </Box>

              <FormControl id="dataVencimento" isRequired>
                <FormLabel>Data de vencimento</FormLabel>
                <Input type="date" />
              </FormControl>
              <FormControl id="cpf" isRequired>
                <FormLabel>CPF</FormLabel>
                <InputGroup>
                  <Input type={"number"} />
                </InputGroup>
              </FormControl>
            </Stack>
          </Stack>
        </Entrega>

        <Carrinho>
          <TituloCarrinho>
            <p>Meu carrinho:</p>
          </TituloCarrinho>
          {exibirCarrinho}

          <DivTotalBotao>
            <p>Total = U${valorTotal},00</p>
            <Button
              colorScheme={"red"}
              borderRadius={0}
              onClick={() => {
                onClickFinalizarPedido();
              }}
            >
              Concluir pedido
            </Button>
          </DivTotalBotao>
        </Carrinho>
      </Container>

      <Footer />
    </div>
  );
};

export default CheckOutPage;
