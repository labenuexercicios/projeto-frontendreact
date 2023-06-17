import React from "react";
import { Container, Product, FirstLine, ButtonMais, 
  ButtonMenos, ButtonRemove, Value, Name, Buttons, Img, LineEnd, ButtonEnd, Total } from "./Styles";
import lixeira from "../../asset/img/lixeira.png"


const Carrinho = ({cartItems, setCartItems}) => {

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

  function avisarCompraFinalizada () {
    if(cartItems.length >= 1){
        alert("Compra concluida com sucesso!")
      }else{
        alert("Primeiro adicione itens ao carrinho")
      }
    const virarString =JSON.stringify([])
    localStorage.setItem("local", virarString)
    setCartItems([])
  }
  
  
  return (
    <Container>
      <h2>Carrinho:</h2>
      <span>Quantidade de itens: {countCartItems}</span>
      {cartItems.map((itemCarrinho)=> {
        return ( 
          <Product key={itemCarrinho.id}>
           <FirstLine >
              <Buttons>
                <ButtonMenos onClick={() => onRemove(itemCarrinho)}>-</ButtonMenos>
                {itemCarrinho.qtd}x 
                <ButtonMais onClick={() => onAdicionar(itemCarrinho)}>+</ButtonMais>
              </Buttons>
              <Value>R${(itemCarrinho.valor*itemCarrinho.qtd).toLocaleString('pt-br',{ minimumFractionDigits: 2})}</Value>
           </FirstLine>
           <Name>{itemCarrinho.nome}</Name>
           <ButtonRemove onClick={() => onRemoveTotal(itemCarrinho)}>
            <Img className="lixeira" src={lixeira} alt="lixeira" />
           </ButtonRemove>
          </Product>
         )})}
         <LineEnd>
           <Total>Total: R${totalPrice.toLocaleString('pt-br',{ minimumFractionDigits: 2})}</Total>
           <ButtonEnd onClick={avisarCompraFinalizada}>Finalizar compra</ButtonEnd>
         </LineEnd>
    </Container>
  );
};

export default Carrinho;