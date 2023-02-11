import Headers from "./components/Header";
import Main from "./components/Main";
import Compras from "./components/Compras";
import { data } from "./data";
import { useState } from "react";
import Footer from "./components/Footer";
function App(props) {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const [query, setQuery] = useState("");
  const [minPrice, setMinPrice] = useState(-Infinity);
  const [orderParam, setOrderParam] = useState("ordenar");
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(50);
  const handleInputOrderParam = (event) => {
    setOrderParam(event.target.value);
  };
  const onChangeMin = (event) => {
    setMin(event.target.value);
  };
  const onChangeMax = (event) => {
    setMax(event.target.value);
  };
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(cartItems.map((x) => (x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x)));
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(cartItems.map((x) => (x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x)));
    }
  };

  return (
    <div className="App">
      <Headers counteCartItems={cartItems.length}></Headers>
      <div className="row">
        <Main
          onAdd={onAdd}
          products={products}
          query={query}
          setQuery={setQuery}
          minPrice={minPrice}
          setMinPrice={setMinPrice}
          orderParam={orderParam}
          handleInputOrderParam={handleInputOrderParam}
          onChangeMin={onChangeMin}
          onChangeMax={onChangeMax}
          min={min}
          max={max}
        ></Main>
        <Compras
          handleInputOrderParam={handleInputOrderParam}
          orderParam={orderParam}
          setOrderParam={setOrderParam}
          query={query}
          onAdd={onAdd}
          onRemove={onRemove}
          cartItems={cartItems}
          setQuery={setQuery}
          onChangeMin={onChangeMin}
          onChangeMax={onChangeMax}
          min={min}
          max={max}
        ></Compras>
      </div>
      <Footer />
    </div>
  );
}

export default App;
