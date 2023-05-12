import GlobalStyles from "./GlobalStyles";
import Filters from "./Components/Filters";
import Home from "./Components/ProductList/Home";
import ShoppingCart from "./Components/ShoppingCart";
import { Container, LeftPanel, MiddlePanel, RightPanel } from "./styles";
function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <LeftPanel>
          <Filters />
        </LeftPanel>
        <MiddlePanel>
          <Home />
        </MiddlePanel>
        <RightPanel>
          <ShoppingCart />
        </RightPanel>
      </Container>
    </>
  );
}

export default App;
