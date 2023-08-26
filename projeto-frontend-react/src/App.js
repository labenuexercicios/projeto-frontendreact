import { AppContainer } from "./AppStyle";
import { Carrinho } from "./components/Carrinho/Carrinho";
import { Filtros } from "./components/Filtros/Filtros";
import { Home } from "./components/Home/Home";

function App() {
  return (
    <AppContainer>
      <Filtros />
      <Home />
      <Carrinho />
    </AppContainer>
  );
}

export default App;
