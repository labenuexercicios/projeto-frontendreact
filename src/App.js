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
  const [order, setOrder] = useState("")
  const onChangeOrder = (e) => {
    setOrder(e.target.value)
  }
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
                .sort((a, b) => {
                  if (order === "Crescente") {
                    return a.price > b.price ? 1 : -1;                    
                  } else if (order === "Decrescente") {
                    if (a.price < b.price) {
                      return 1;
                    } else {
                      return -1;
                    }
                  }
                })
                .map((game) => {
                  return <Cards name={game.name} price={game.price} img={game.imageUrl} />;
                })}
            </CardsGrid>
            <AsideContent>
              <NavFilters>
                <p>Filtros: </p>
                <label>
                  Valor mínimo:
                  <input type="number" />
                </label>
                <label>
                  Valor máximo:
                  <input type="number" />
                </label>
              </NavFilters>
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