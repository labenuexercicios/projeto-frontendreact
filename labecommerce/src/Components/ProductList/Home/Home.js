import { useState } from "react";
import { productList } from "../../../assets/productList";
import ProductCard from "../ProductCard/ProductCard";
import { HomeContainer } from "./HomeStyle";

const Home = ({ productList, amount, setAmount, cart, setCart }) => {
  const [ordination, setOrdination] = useState("");

  const handleOrdination = (event) => {
    setOrdination(event.target.value);
  };

  let sortedProducts = [...productList];

  if (ordination === "Crescente") {
    sortedProducts.sort((a, b) => a.value - b.value);
  } else if (ordination === "Decrescente") {
    sortedProducts.sort((a, b) => b.value - a.value);
  }

  const addToCart = (id) => {
    const existingProduct = cart.find((item) => item.id === id);
  
    if (existingProduct) {
      const updatedCart = cart.map((item) =>
        item.id === id ? { ...item, amount: item.amount + 1 } : item
      );
      setCart(updatedCart);
    } else {
      const selectedProduct = productList.find((item) => item.id === id);
      setCart([...cart, { ...selectedProduct, amount: 1 }]);
    }
  };
  
  
  const renderedProducts = sortedProducts.map((product) => (
    <ProductCard
      key={product.id}
      id={product.id}
      name={product.name}
      value={product.value}
      imgUrl={product.imageUrl}
      addToCart={addToCart}
    />
  ));

  return (
    <HomeContainer>
      <header>
        <p>Quantidade de Produtos: {productList.length}</p>
        <div id="order">
          <p>Ordenação:</p>
          <select value={ordination} onChange={handleOrdination}>
            <option value="">Selecione</option>
            <option value="Crescente">Mais Barato</option>
            <option value="Decrescente">Mais Caro</option>
          </select>
        </div>
      </header>
      <main>{renderedProducts}</main>
    </HomeContainer>
  );
};

export default Home;
