import Filter from "./Components/Filters/Filters";
import Home from "./Components/ProductList/Home/Home";
import Cart from "./Components/ShoppingCart/Cart/Cart";
import styled from 'styled-components';

const AppStyle = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;

    @media (max-width: 1280px) {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;     
    }
`

const Header = styled.header`
    display: flex;
    border: 1px solid #000;
    padding: 20px;

`


function App() {
  return (
    <>
      <Header>
          <h1>Titulo da Loja</h1>
        </Header>
      <AppStyle>
        


        <Filter/>
        <Home/>
        <Cart/>

        
      </AppStyle>
    </>
  );
}

export default App;
