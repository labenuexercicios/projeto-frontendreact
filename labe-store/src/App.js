import Filters from "./Components/Filters/Filters";
import Header from "./Components/Header/Header";
import Home from "./Components/ProductList/Home/Home";
import Cart from "./Components/ShoppingCart/Cart/Cart";
import { GlobalStyle } from "./GlobalStyle";
import {Products} from "./Components/assents/ProductsList"
import { useState } from "react";



function App() { 

  const [ search, setSearch] = useState("");
  const [ order, setOrder] = useState("")

    return (
      <div>
        <GlobalStyle/>

        <header>
          <Header
          search={search}
          setSearch={setSearch}/>
        </header>

        <main>
          <nav>
            <Filters/>
          </nav>

          <article>
            <Home
            Products={Products}
            search={search}
            order={order}
            setOrder={setOrder}/>
          </article>

          <section>
            <Cart/>
          </section>

        </main>
      </div>
    ) 
}

export default App;
