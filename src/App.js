import React, { useState } from "react";
import GlobalStyle from "./globalStyles";
import Home from "./componentes/Home/Home";
import Filtros from "./componentes/Filtros/Filtros";
import Carrinho from "./componentes/Carrinho/Carrinho";
import {
  ContainerPag,
  Main,
  Header,
  H1,
  NavBar,
  ButtonCart,
  ContainerButton,
  Footer
} from "./style";

function App() {
  // ---- ESTADOS FILTROS ----
  const [pesquisa, setPesquisa] = useState("");
  const [orderFilter, setOrderFilter] = useState("");
  const [valueMin, setValueMin] = useState("");
  const [valueMax, setValueMax] = useState("");
  const [category, setCategory] = useState("");

  // ---- ESTADOS CARRINHO ----
  const [listaCarrinho, setListaCarrinho] = useState([""]);
  // Mostrar/esconder carrinho com botão
  const [showElement, setShowElement] = useState(false);
  const showOrHide = () => {
    setShowElement(true);
  };

  return (
    <ContainerPag>
      <GlobalStyle />
      <Header>
        <H1>SPACE STORE </H1> 
        <NavBar>
          <Filtros
            pesquisa={pesquisa}
            setPesquisa={setPesquisa}
            orderFilter={orderFilter}
            setOrderFilter={setOrderFilter}
            valueMin={valueMin}
            setValueMin={setValueMin}
            valueMax={valueMax}
            setValueMax={setValueMax}
            category={category}
            setCategory={setCategory}
          />
        </NavBar>
      </Header>
      <Main>
        <Home
          pesquisa={pesquisa}
          orderFilter={orderFilter}
          valueMin={valueMin}
          valueMax={valueMax}
          category={category}
          setListaCarrinho={setListaCarrinho}
          listaCarrinho={listaCarrinho}
        />
        <ContainerButton>
          <ButtonCart onClick={showOrHide}>
            <img
              src={"https://cdn-icons-png.flaticon.com/512/40/40483.png"}
              alt="not found"
            />
          </ButtonCart>
          {showElement ? (
            <Carrinho
              showElement={showElement}
              setShowElement={setShowElement}
              listaCarrinho={listaCarrinho}
              setListaCarrinho={setListaCarrinho}
            />
          ) : null}
        </ContainerButton>
      </Main>
      <Footer>
        <div>footer</div>
      </Footer>
    </ContainerPag>
  );
}
export default App;
