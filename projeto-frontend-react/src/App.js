import { useState } from "react";
import { GlobalStyle } from "./GlobalStyle";
import { AppContainer } from "./AppStyle";
import { productsList } from "./assents/productsList";
import { Filters } from "./components/Filters/Filters";
import { Home } from "./components/ProductList/Home/Home";
import { Cart } from "./components/ShoppingCart/Cart/Cart";

function App() {

  const [minFilter, setMinFilter] = useState("");
  const [maxFilter, setMaxFilter] = useState("");
  const [searchFilter, setSearchFilter] = useState("");
  const [searchFilterMaterial, setSearchFilterMaterial] = useState("");
  const [searchFilterProduto, setSearchFilterProduto] = useState("");
  const [cart, setCart] = useState([]);
  const [amount, setAmount] = useState(0);
  const [soma, setSoma] = useState(0);

  const { id, name, value, imageUrl } = productsList;

  let totalValue = soma;

  const filteredProducts = productsList
    .filter(
      (item) =>
        searchFilter === "" ||
        item.name.toLowerCase(searchFilter.toLowerCase()).includes(searchFilter)
    )
    .filter(
      (item) => item.value >= minFilter || minFilter === "" || minFilter === 0
    )
    .filter(
      (item) => item.value <= maxFilter || maxFilter === "" || maxFilter === 0
    );

  const addCart = (products) => {
    const newProduct = cart.find((item) => item.id === products.id);
    if (newProduct === undefined) {
      setCart([...cart, { ...products, amount: 1 }]);
    } else {
      const newCart = cart.map((item) => {
        if (item.id === products.id) {
          return { ...newProduct, amount: newProduct.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
    setSoma(products.value + totalValue);
  };

  const deleteProductCart = (products) => {
    const productDelete = cart.find((item) => item.id === products.id);
    if (productDelete.amount > 1) {
      const newCart = cart.map((item) => {
        if (item.id === products.id) {
          return { ...productDelete, amount: productDelete.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      const newCart = cart.filter((item) => {
        return item.id !== products.id;
      });
      setCart(newCart);
    }
    setSoma(totalValue - products.value);
  };

  const limparCarrinho = () => {
    setCart([]);
    setSoma(0);
  };

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Filters
          states={{
            minFilter,
            maxFilter,
            searchFilter,
            searchFilterMaterial,
            searchFilterProduto,
          }}
          handlers={{
            setMinFilter,
            setMaxFilter,
            setSearchFilter,
            setSearchFilterMaterial,
            setSearchFilterProduto,
          }}
        />
        <Home
          states={{ cart, minFilter, maxFilter, searchFilter }}
          handlers={{ setCart, setAmount }}
          productsList={productsList}
          addCart={addCart}
          deleteProductCart={deleteProductCart}
          filteredProducts={filteredProducts}
        />
        <Cart
          states={{ cart, amount }}
          handlers={{ setCart, setAmount }}
          productsList={productsList}
          totalValue={totalValue}
          deleteProductCart={deleteProductCart}
          limparCarrinho={limparCarrinho}
        />
      </AppContainer>
    </>
  );
}

export default App;
