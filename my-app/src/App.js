import Footer from "./layout/footer";
import Header from "./layout/header";
import Main from "./layout/main";
import { Data } from "./data";
import { useState } from "react";

function App() {
  const [category, setCategory] = useState("");
  const [isOnFilter, setIsOnFilter] = useState(false);
  const [isOnOrder, setIsOnOrder] = useState(false);
  const [products, setProducts] = useState(Data);
  const [order, setOrder] = useState("default");

  const filterProducts = () => {
    if (category === "todos") {
      setProducts(Data);
      return;
    }

    if (category && category.length > 0) {
      setProducts(Data.filter((e) => e.category === category));
    }

    setOrder("default");
  };

  const orderProducts = () => {
    const productsCopy = [...products];

    switch (order) {
      case "min":
        productsCopy.sort((a, b) => a.price - b.price);
        break;

      case "max":
        productsCopy.sort((a, b) => b.price - a.price);
        break;

      default:
        productsCopy.sort((a, b) => a.id - b.id);
    }

    setProducts(productsCopy);
  };

  if (isOnFilter) {
    filterProducts();
    setIsOnFilter(false);
  }

  if (isOnOrder) {
    orderProducts();
    setIsOnOrder(false);
  }

  return (
    <div>
      <Header setIsOnFilter={setIsOnFilter} setCategory={setCategory} />
      <Main
        products={products}
        setIsOnOrder={setIsOnOrder}
        order={order}
        setOrder={setOrder}
      />
      <Footer />
    </div>
  );
}

export default App;
