import React from "react";
import { Container, PP } from "./Styles";

const LadoDireito = ({cartItems, setCartItems}) => {

  const itemsPrice = cartItems.reduce((a, c) => {
    return a + c.qtd * c.valor
  }, 0);

  const totalPrice = itemsPrice;

  const countCartItems = cartItems.reduce((a, c) => {
    return a + c.qtd
  }, 0);

  
  const onRemove = (itemCarrinho) => {
    const novoCarrinho = [...cartItems]

    const produtoNovo = novoCarrinho.find(
      (novoItem) => novoItem.id === itemCarrinho.id
    )
    if(produtoNovo.qtd > 1){
    produtoNovo.qtd--
  } 
    const virarString = JSON.stringify(novoCarrinho)
    localStorage.setItem("local", virarString)
    setCartItems(novoCarrinho)
  }

  const onAdicionar = (itemCarrinho) => {
    const novoCarrinho = [...cartItems]

    const produtoNovo = novoCarrinho.find(
      (novoItem) => novoItem.id === itemCarrinho.id
    )
    if(produtoNovo.qtd >= 1){
    produtoNovo.qtd++
  } 
    const virarString = JSON.stringify(novoCarrinho)
    localStorage.setItem("local", virarString)
    setCartItems(novoCarrinho)
  }

  const onRemoveTotal = (itemCarrinho) =>{

    const filtroDelete = cartItems.filter(
    (item) => item.id !== itemCarrinho.id)
    const virarString = JSON.stringify(filtroDelete)
    localStorage.setItem("local", virarString)
    setCartItems(filtroDelete)
  }
  
  return (
    <Container>
      <h2>Carrinho:</h2>
      <p>Quantidade de itens: {countCartItems}</p>
      {cartItems.map((itemCarrinho)=> {
        return ( 
          <PP>
           <p key={itemCarrinho.id} >{itemCarrinho.qtd}x {itemCarrinho.nome} R${itemCarrinho.valor*itemCarrinho.qtd}</p>
           <button onClick={() => onRemove(itemCarrinho)}>-</button>
           <button onClick={() => onAdicionar(itemCarrinho)}>+</button>
           <button onClick={() => onRemoveTotal(itemCarrinho)}>Remover</button>
         </PP>
         )})}
         <h3>Total: R${totalPrice}</h3>
    </Container>
  );
};

export default LadoDireito;