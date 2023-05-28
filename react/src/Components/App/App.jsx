import { GlobalStyle } from "../../GlobalStyle";
import { Body } from "./AppStyle";
import { Cart } from "../ShoppingCart/Cart/Cart";
import { Filter } from "../Filters/Filter";
import { Home } from "../ProductList/Home/Home";
import { productList } from "../Assents/ProductList";
import { useEffect, useState } from "react";

export default function App() {
  const [minFilter, setMinFilter] = useState(0);
  const [maxFilter, setMaxFilter] = useState(0);
  const [searchFilter, setSearchFilter] = useState("");
  const [amount, setAmount] = useState(0);
  const [cart, setCart] = useState([]);
  const [orderList, setOrderList] = useState([...productList]);

  useEffect(() => {
    setOrderList(
      productList
        .filter((product) => {
          return minFilter ? product.value >= minFilter : product;
        })
        .filter((product) => {
          return maxFilter ? product.value >= maxFilter : product;
        })
        .filter((product) => {
          return searchFilter
            ? product.name.toLowerCase().includes(searchFilter.toLowerCase())
            : product;
        })
    );
  }, [minFilter, maxFilter, searchFilter]);

  return (
    <>
      <GlobalStyle />
      <Body>
        <Filter
          minFilter={minFilter}
          setMinFilter={setMinFilter}
          maxFilter={maxFilter}
          setMaxFilter={setMaxFilter}
          searchFilter={searchFilter}
          setSearchFilter={setSearchFilter}
        />
        <Home
          productList={orderList}
          amount={amount}
          setAmount={setAmount}
          cart={cart}
          setCart={setCart}
          orderList={orderList}
          setOrderList={setOrderList}
        />
        <Cart
          amount={amount}
          setAmount={setAmount}
          cart={cart}
          setCart={setCart}
        />
      </Body>
    </>
  );
}
