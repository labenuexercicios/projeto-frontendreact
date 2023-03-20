import { useState } from "react";
import { Main, Div} from "./AppStyle";
import Filters from "./Components/Filters/Filters";
import Header from "./Components/Header/Header";
import Home from "./Components/ProductList/Home/Home";
import Cart from "./Components/ShoppingCart/Cart/Cart";



function App() {

    const [searchFilter, setSearchFilter] = useState("");
    const [minFilter, setMinFilter] = useState("");
    const [maxFilter, setMaxFilter] = useState("");
    

  return (
   <Div>
      <header>
        <Header/>
      </header>

      <Main>
        <nav>
          <Filters
          search={searchFilter}
          setSearch={setSearchFilter}
          minFilter={minFilter}
          setMinFilter={setMinFilter}
          maxFilter={maxFilter}
          setMaxFilter={setMaxFilter}/>
        </nav> 
        <article>
          <Home/> 
        </article>   
         
        <Cart/>  
      </Main>
      
      
      
     
      
      
   </Div>
  );
}

export default App;
