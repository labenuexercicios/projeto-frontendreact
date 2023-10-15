import { useState } from "react";
import Header from "./componentes/Header/Header";
import Bunners from "./componentes/Bunners/Bunners";
import Comentarios from "./componentes/Comentarios/Comentarios";
import Footer from "./componentes/Footer/Footer";
import styled, { createGlobalStyle } from "styled-components";
import itens from "./itens/itens.json";
import itensBunners from "./itensBunners/itensBunners";
import CartCard from "./componentes/CartCard/CartCard";
import Icones from "./componentes/IconeCarrinho/Icone";

const GlobalStyle = createGlobalStyle`
  body{
    padding: 0;
    text-decoration: none;
    width: 100vw;
    display: flex;
    justify-content:center;
    margin: 0;
    zoom: 1;
  }

  main{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;   

}

`;

const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: center;
  flex-wrap: wrap;
  width: 100%;
  background-color: white;
  border-bottom: solid black 2px;
`;

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  padding: 5px 0 10px 0;
  width: 100%;
  background-color: aliceblue;
`;

const CartContainerDentro = styled.div`
  background-color: white;
  border: solid black 2px;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5px;
  border-radius: 10px;
  min-width: 320px;
  margin: 0 auto;
`
const Total = styled.h3`
    color:black;
    width: auto;
    background-color: white;
    border-radius: 10px;
    width: 30vw;
    text-align: center;
`
const Strong = styled.strong`
  background-color: orange;
`

function App() {
  const [cart, setCart] = useState([]);

  let precoTotal = cart.reduce((acc, itens) => (itens.price * itens.amount) + acc, 0)

  const addToCart = (itens) => {
    const newItem = cart.find((item) => item.id === itens.id);
    if (newItem === undefined) {
      setCart([...cart, { ...itens, amount: 1 }]);
    } else {
      const newCart = cart.map((item) => {
        if (item.id === itens.id) {
          return { ...newItem, amount: newItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }

    const novoCarrinho = [...cart]
    const guardarNovoCarrinho = JSON.stringify(novoCarrinho)
    localStorage.setItem("itens",guardarNovoCarrinho)
  };

  const deleteProductToCart = (itens /*(excluirProdutos)*/) => {
    const deleteProduct = cart.find((item) => item.id === itens.id);
    if (deleteProduct.amount > 1) {
      const newCart = cart.map((item) => {
        if (item.id === itens.id) {
          return { ...deleteProduct, amount: deleteProduct.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      const newCart = cart.filter((item) => {
        return item.id !== itens.id;
      });
      setCart(newCart);
    }
    // const removerItem = [...cart]
    // const index = removerItem.indexOf(excluirProduto)
    // if(index > -1){
    //   removerItem.splice(index, 1)
    //   const guardarProduto = JSON.stringify(removerItem)

    //   localStorage.setItem("localSalvo", guardarProduto)
    //   setCart(removerItem)
    // }
  };
  const productsCart = cart.map((itens) => {
    return (
      <CartCard
        key={itens.id}
        itens={itens}
        deleteProductToCart={deleteProductToCart}
        precoTotal={precoTotal}
      />
    );
  });

  const productsCard = cart.map((itens) => {
    return <Header key={itens.id} itens={itens} />;
  });

  return (
    <>
      <GlobalStyle />
      <CardsContainer>
        <Header
          itens={itens}
          productsCard={productsCard}
          addToCart={addToCart}
        />
      </CardsContainer>
      <CartContainer>
        <CartContainerDentro>
        <Icones />
        {productsCart}
        <Total>
          <h3>O preço total da sua compra é: <Strong>R${precoTotal},00</Strong></h3>
        </Total>
        </CartContainerDentro>
      </CartContainer>
      <Bunners itensBunners={itensBunners} />
      <Comentarios />
      <Footer />
    </>
  );
}

export default App;