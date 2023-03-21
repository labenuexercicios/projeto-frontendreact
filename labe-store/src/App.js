import Filters from "./Components/Filters/Filters";
import Header from "./Components/Header/Header";
import Home from "./Components/ProductList/Home/Home";
import Cart from "./Components/ShoppingCart/Cart/Cart";
import { GlobalStyle } from "./GlobalStyle";



function App() { 
    return (
      <div>
        <GlobalStyle/>

        <header>
          <Header/>
        </header>

        <main>
          <nav>
            <Filters/>
          </nav>

          <article>
            <Home/>
          </article>

          <section>
            <Cart/>
          </section>

        </main>
      </div>
    ) 
}

export default App;
