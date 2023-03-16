/* import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer"; */
import Filters from "./Components/Filters/Filters";
import { GlobalStyle, Container } from "./GlobalStyle";
import Home from "./Components/ProductList/Home/Home";
import Cart from "./Components/ShoppingCart/Cart/Cart";

function App() {
  return (
    <div>
      <GlobalStyle/>
{/*       <Header></Header> */}
      <Container>
        <Filters></Filters>
        <Home></Home>
        <Cart></Cart>
      </Container>
{/*       <Footer></Footer> */}
    </div>
  );
}

export default App;
