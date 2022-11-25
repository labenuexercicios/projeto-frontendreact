import { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Content from "../Content/Content";
import Filter from "../Filter/Filter";
import { HomeContainer } from "./styles";

function Home() {
  const [query, setQuery] = useState("");
  const [minPrice, setMinPrice] = useState("")
  const [maxPrice, setMaxPrice] = useState("")
  const [ordenacao, setOrdenacao] = useState("")

  return (
  
    <HomeContainer className="Home">
      <Header
        menuBrinquedos={"Brinquedos espaciais"}
        menuAcessorios={"Produtos infantis"}
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
  
    </HomeContainer>
  );
}

export default Home;
