import React from "react";
import { useNavigate } from "react-router-dom";
import CardCarrinho from "../components/CardCarrinho";
import { handleHome } from "../Router/cordinator";
import styled from "styled-components";


export default function Carrinho({carrinho, setCarrinho}) {
  const navigate = useNavigate();

  let preçoTotal = 0;
  carrinho.map((item) => (preçoTotal = preçoTotal + item.price * item.amount));

  function remover(id) {
    const mercadorias = carrinho && carrinho.find((item) => item.id === id);
    console.log(mercadorias);

    if (mercadorias.amount > 1) {
      const novoCarrinho = carrinho.map((item) => {
        if (mercadorias.id === item.id && item.amount >= 1) {
          return { ...item, amount: item.amount - 1 };
        } else {
          return item;
        }
      });

      setCarrinho(novoCarrinho);
    } else {
  
      const carrinhoVazio = carrinho.filter((item) => item.id !== id);
      setCarrinho(carrinhoVazio);
    }
  }

  const carrinhoRenderizado = carrinho.map((item) => {
    return <CardCarrinho 
        key={item.id}    
        id={item.id}
        img={item.image}
        name={item.name}
        amount={item.amount}
        price={item.price}
        deleteItem={remover}
    ></CardCarrinho>

  })

  return (
    <CarrinhoContainer>
      <h1>Confira abaixo seus produtos</h1>
      <button onClick={() => handleHome(navigate)}>Voltar</button>
      {carrinhoRenderizado}
      <h3>Preço Total: R$ {preçoTotal},00</h3>
    </CarrinhoContainer>
  );
}
const CarrinhoContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align:center;
  `;
