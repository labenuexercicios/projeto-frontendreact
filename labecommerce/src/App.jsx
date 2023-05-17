import React, { useEffect, useState } from "react";
import Filters from "./components/Filters/Filters";
import Home from "./components/ProductList/Home/Home";
import Cart from "./components/Shopping/Cart/Cart";
import GlobalStyles from "./GlobalStyle";
import { AppBox } from "./AppStyle";
import { productList } from "./assets/productList";

function App() {
  const [minFilter, setMinFilter] = useState("");
  const [maxFilter, setMaxFilter] = useState("");
  const [searchFilter, setSearchFilter] = useState("");
  const [cart, setCart] = useState([]);
  const [amount, setAmount] = useState("");
  const [sortedList, setSortedList] = useState([]);


  useEffect(() => {
    setSortedList(
      productList.filter((product) => {
        if (minFilter.length === 0 && maxFilter.length === 0) {
          return product;
        } else if (
          (minFilter.length === 0 && product.price <= maxFilter) ||
          (maxFilter.length === 0 && product.price >= minFilter)
        ) {
          return product;
        } else if (product.price <= maxFilter && product.price >= minFilter) {
          return product;
        }
      })
    );
    // setSortedList(productListFiltered)
  }, [minFilter, maxFilter]);

  useEffect(() => {
    
  }, [searchFilter])
  return (
    <AppBox>
      <GlobalStyles />
      <Filters
        minFilter={minFilter}
        setMinFilter={setMinFilter}
        maxFilter={maxFilter}
        setMaxFilter={setMaxFilter}
        searchFilter={searchFilter}
        setSearchFilter={setSearchFilter}
      />
      <Home
        productList={sortedList}
        amount={amount}
        setAmount={setAmount}
        cart={cart}
        setCart={setCart}
        sortedList={sortedList}
        setSortedList={setSortedList}
      />
      <Cart
        amount={amount}
        setAmount={setAmount}
        cart={cart}
        setCart={setCart}
      />
    </AppBox>
  );
}

export default App;
