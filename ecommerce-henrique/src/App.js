import Data from "./Data/Data";
import "./App.css";
import { CardContainer, Container, MainContainer, Header, Footer, Image } from "./Style";
/// componentes
import Home from "./Components/Pages/Home";
import Aside from "./Components/Aside/Aside";
/// Hooks
import { useState } from "react";
import { GlobalStyle } from "./Components/GlobalStyle";

function App() {
  // Estados de armezenamento
  //Filtro por nome
  const [nameFilter, setNameFilter] = useState("");
  //Filtro pelo preco
  const [priceFilter, setPriceFilter] = useState("");
  //Filtro pela ordem
  const [orderFilter, setOrderFilter] = useState("");
  // Estado que armazena compras
  const [cart, setCart] = useState([]);

  // funcao busca pelo nome
  const handleName = (Data) => {
    return Data.name.toLowerCase().includes(nameFilter.toLowerCase());
  };
  // funcao busca pelo preco
  const handleFilterPrice = (Data) => {
    return priceFilter ? Data.value <= priceFilter : true;
  };


  //funcao que adiciona mais uma unidade do item ao carrinho
   const addPlusItem = (produtos) => {
    const existingProduct = cart.find(p => p.id === produtos.id);
    if (existingProduct) {
      setCart(
        cart.map(p =>
          p.id === produtos.id
            ? { ...p, quantity: p.quantity + 1 }
            : p
        )
      );
    } else {
      setCart([...cart, { ...produtos, quantity: 1 }]);
    }
  };

 
  return (
    <Container>
      <GlobalStyle />
      <Header>
        <h1>Supermassive Market of Nebulosas</h1>
      </Header>
      <MainContainer>
      <CardContainer>
      {Data.filter(handleName)
        .filter(handleFilterPrice)
        .sort((atualEstado, proximoEstado) => {
          if (orderFilter === "crescente") {
            if (atualEstado.name < proximoEstado.name) {
              return -1;
            } else if (atualEstado.name > proximoEstado.name) {
              return 1;
            } else {
              return 0;
            }
          }
          if (orderFilter === "decrescente") {
            if (atualEstado.name < proximoEstado.name) {
              return +1;
            } else if (atualEstado.name > proximoEstado.name) {
              return -1;
            } else {
              return 0;
            }
          }
        })
        .map((Data) => (
          
            <Home Data={Data} key={Data.id} addPlusItem={addPlusItem}></Home>
        ))}
         </CardContainer>
         <Aside
        nameFilter={nameFilter}
        setNameFilter={setNameFilter}
        priceFilter={priceFilter}
        setPriceFilter={setPriceFilter}
        orderFilter={orderFilter}
        setOrderFilter={setOrderFilter}
        cart={cart}
        setCart={setCart}
        addPlusItem={addPlusItem}
      />
         </MainContainer>
         <Footer>
          <h3>Developed by Henrique Batista - All Rights Reserved</h3>
          <a href="https://github.com/HenriqBatista" target="_blank" rel="noopener noreferrer"><Image src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Github Icon" /></a>
         </Footer>
    </Container>
  );
}

export default App;
