import { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Content from "../Content/Content";
import Filter from "../Filter/Filter";
import { HomeContainer } from "./styles";
import cards from "../../cards/card.json";

function Home() {
  const [query, setQuery] = useState("");
  console.log(query);

  return (
    <HomeContainer className="Home">
      <Header
        menuBrinquedos={"Brinquedos espaciais"}
        menuAcessorios={"Produtos infantis"}
        query={query}
        setQuery={setQuery}
      />

      <Filter />

      <Content query={query} setQuery={setQuery} />

      <Footer />
    </HomeContainer>
  );
}

export default Home;
