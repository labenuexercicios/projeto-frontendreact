import { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Content from "./components/Content/Content";
import Filter from "./components/Filter/Filter";
import styled from "styled-components";

function App(props) {
  const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 20vh auto auto 15vh;
  grid-template-columns: auto;
`;
  const [query, setQuery] = useState("");
  const [minPrice, setMinPrice] = useState("")
  const [maxPrice, setMaxPrice] = useState("")
  const [ordenacao, setOrdenacao] = useState("")

  return (

    <AppContainer className="App-pagina-inteira">
      <Header
        query={query} setQuery={setQuery}
      />

      <Filter
        minPrice={minPrice} setMinPrice={setMinPrice}
        maxPrice={maxPrice} setMaxPrice={setMaxPrice}
        ordenacao={ordenacao} setOrdenacao={setOrdenacao}
      />

      <Content
        query={query} setQuery={setQuery}
        minPrice={minPrice} setMinPrice={setMinPrice}
        maxPrice={maxPrice} setMaxPrice={setMaxPrice}
        ordenacao={ordenacao} setOrdenacao={setOrdenacao}
      >

      </Content>

      <Footer />

    </AppContainer>
  );
}

export default App;

