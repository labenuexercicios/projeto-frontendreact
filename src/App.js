import React, { useState } from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { createGlobalStyle } from "styled-components";
import {
  MainContent,
  CardsGrid,
  Cart,
  NavFilters,
  MainContentWrapper,
  AsideContent,
  Body,
} from "./styled";
import Cards from "./components/cards/Cards";
import games from "./components/games/games.json";

export const GlobalStyled = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

function App() {
  const [searchByName, setSearchByName] = useState("");
  const [order, setOrder] = useState("");
  const [minValueOrder, setMinValueOrder] = useState("0");
  const [maxValueOrder, setMaxValueOrder] = useState("1000");

  const onChangeMinValueOrder = (e) => {
    setMinValueOrder(e.target.value);
  };
  const onChangeMaxValueOrder = (e) => {
    setMaxValueOrder(e.target.value);
  };
  const onChangeOrder = (e) => {
    setOrder(e.target.value);
  };

  return (
    <div>
      <Body>
        <Header searchByName={searchByName} setSearchByName={setSearchByName} />
        <MainContent>
          <MainContentWrapper>
            <CardsGrid>
              {games
                .filter((game) => {
                  return game.name
                    .toLowerCase()
                    .includes(searchByName.toLowerCase());
                })
                .filter((game) => {
                  if (game.price >= parseInt(minValueOrder)) {
                    return game.price;                 
                }})
                .filter((game) => {
                  if (game.price <= parseInt(maxValueOrder)) {
                    return game.price;                  
                }})
                .sort((a, b) => {
                  if (order === "Crescente") {
                    return parseInt(a.price) > parseInt(b.price) ? 1 : -1;
                  } else if (order === "Decrescente") {                    
                      return parseInt(a.price) < parseInt(b.price) ? 1 : -1;                    
                  }
                })
                .map((game) => {
                  return (
                    <Cards
                      key={game.id}
                      name={game.name}
                      price={game.price}
                      img={game.imageUrl}
                    />
                  );
                })}
            </CardsGrid>
            <AsideContent>
              <NavFilters>
                <p>Filtros: </p>
                <label>
                  Valor mínimo:
                  <input type="number" onChange={onChangeMinValueOrder} />
                </label>
                <label>
                  Valor máximo:
                  <input type="number" onChange={onChangeMaxValueOrder} />
                </label>
              </NavFilters>
              <p>Ordenação: </p>
              <select onChange={onChangeOrder}>
                <option value="">Ordenar</option>
                <option value="Crescente">Crescente</option>
                <option value="Decrescente">Decrescente</option>
              </select>
              <Cart>
                <span>CARRINHO</span>
              </Cart>
            </AsideContent>
          </MainContentWrapper>
        </MainContent>
        <Footer />
        <GlobalStyled />
      </Body>
    </div>
  );
}

export default App;
