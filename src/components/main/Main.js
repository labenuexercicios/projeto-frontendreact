import React from "react";
import { MainContent, CardsGrid } from "./styled";
import Cards from "../cards/Cards";

function Main() {
  return (
    <>
      <MainContent>
        <CardsGrid>
          <Cards />
        </CardsGrid>
        <aside>
          <span>CARRINHO</span>
        </aside>
      </MainContent>
    </>
  );
}

export default Main;
