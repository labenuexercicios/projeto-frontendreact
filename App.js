import Filters from "./Components/FiltrosEOrdenacao/FiltroseOrdenacao";
import Produtos from "./Components/Home/Produtos/Produtos";
import Cart from "./Components/Carrinho/Cart/Carrinho";
import { useState } from "react";
import productList from "./ProductList";
import GlobalStyled from './GlobalStyle'
import { Header } from "./Components/Header/Header";


export default function App() {

  const [minFilter, setMinFilter] = useState(-Infinity);
  const [maxFilter, setMaxFilter] = useState(Infinity);
  const [searchFilter, setSearchFilter] = useState("");
  const [cart, setCart] = useState([]);
  const [amount, setAmount] = useState(0);

  const filteredProductList = productList
    .filter((product) => {
      if (product.value >= minFilter) {
        return true;
      } else {
        return false;
      }
    })
    .filter((product) => {
      if (product.value <= maxFilter) {
        return true;
      } else {
        return false;
      }
    })
    .filter((product) => {
      return product.name
        .toLocaleLowerCase()
        .includes(searchFilter.toLocaleLowerCase());
    });

  console.log("App", cart);
  return (
  <>
      
      <Header/>
      <Filters
        minFilter={minFilter}
        setMinFilter={setMinFilter}
        maxFilter={maxFilter}
        setMaxFilter={setMaxFilter}
        searchFilter={searchFilter}
        setSearchFilter={setSearchFilter}
      />
      <Produtos
        productList={filteredProductList}
        amount={amount}
        setAmount={setAmount}
        setCart={setCart}
        cart={cart}
      />
      <Cart
        amount={amount}
        setAmount={setAmount}
        cart={cart}
        setCart={setCart}
      />
    </>
  );
}
