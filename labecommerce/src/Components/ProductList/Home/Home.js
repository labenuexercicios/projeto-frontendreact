import { useState } from "react";
import { productList } from "../../../assets/productList";
import ProductCard from "../ProductCard/ProductCard";
import { HomeContainer } from "./HomeStyle";

const Home = ({productList, amount, setAmount, cart , setCart}) => {
  
  const [ordination, setOrdination] = useState('');

  const handleOrdination = (event) => {
    setOrdination(event.target.value);
  }

  let sortedProducts = [...productList]; 

  if (ordination === 'Crescente') {
    sortedProducts.sort((a, b) => a.value - b.value);
  } else if (ordination === 'Decrescente') {
    sortedProducts.sort((a, b) => b.value - a.value);
  }

  const renderedProducts = sortedProducts.map((product) => (
    <ProductCard
      key={product.id}
      name={product.name}
      value={product.value}
      imgUrl={product.imageUrl}
    />
  ))

  return (
    <HomeContainer>
      <header>
        <p>Quantidade de Produtos: {productList.length}</p>
        <div id="order">
          <p>Ordenação:</p>
          <select value={ordination} onChange={handleOrdination}>
            <option value="">Selecione</option>
            <option value="Crescente">Crescente</option>
            <option value="Decrescente">Decrescente</option>
          </select>
        </div>
      </header>
      <main>
        {renderedProducts}
      </main>
    </HomeContainer>
  );
};

export default Home;