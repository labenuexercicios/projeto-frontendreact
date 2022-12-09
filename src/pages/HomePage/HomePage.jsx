import {
  ContainerProdutos,
  Container,
  H2,
  Main,
  Aside,
} from "./HomePageStyled.js";
import Card from "../../components/Card/Card";
import { Filter, Nav } from "../../components/Filter/Filter";
import { Cart } from "../../components/Cart/Cart.jsx";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext.jsx";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";

export const HomePage = () => {
  const context = useContext(GlobalContext);
  const { viagensEspaciais, componentesCarrinho, filtro } = context;

  return (
    <Container>
      <Header />
      <Nav />
      <Main>
        <Aside>
          <Filter />
          {componentesCarrinho.divCarrinho && <Cart />}
        </Aside>
        <ContainerProdutos>
          <h1>Viaje para o espaço com a Astrodev</h1>
          <H2>
            Escolha um de nossos pacotes disponíveis e aproveite uma viagem
            interestelar com o melhor preço do mercado!
          </H2>
          {viagensEspaciais
            .filter((viagem) => {
              return filtro.filtraNome
                ? viagem.destino
                    .toLowerCase()
                    .includes(filtro.filtraNome.toLowerCase())
                : viagem;
            })
            .sort((a, b) => {
              if (filtro.ordenar === "crescente") {
                if (a.valor > b.valor) return 1;
                if (a.valor < b.valor) return -1;
              }
              if (filtro.ordenar === "decrescente") {
                if (a.valor < b.valor) return 1;
                if (a.valor > b.valor) return -1;
              }
            })
            .filter((viagem) => {
              if (+filtro.filtraValorMinimo <= viagem.valor) return viagem;
            })
            .filter((viagem) => {
              if (+filtro.filtraValorMaximo >= viagem.valor) {
                return viagem;
              } else if (+filtro.filtraValorMaximo.length === 0) {
                return viagem;
              }
            })
            .map((viagem) => {
              return <Card key={viagem.id} viagem={viagem} />;
            })}
        </ContainerProdutos>
      </Main>
      <Footer />
    </Container>
  );
};
