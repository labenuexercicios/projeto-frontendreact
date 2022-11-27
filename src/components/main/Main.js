import React from "react";
import {
  MainContent,
  CardsGrid,
  Cart,
  NavFilters,
  MainContentWrapper,
  AsideContent
} from "./styled";
import Cards from "../cards/Cards";

function Main() {
  return (
    <>
      <MainContent>
        <MainContentWrapper>
          <CardsGrid>
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
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
            <Cart>
              <span>CARRINHO</span>
            </Cart>
          </AsideContent>
        </MainContentWrapper>
      </MainContent>
    </>
  );
}

export default Main;
