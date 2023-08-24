import { useState } from "react";
import { productList } from "../../../assets/productList";
import ProductCard from "../ProductCard/ProductCard";
import { HomeContainer } from "./HomeStyle";

const Home = (props) => {
  
  const [ordination, setOrdination] = useState('');

  const handleOrdination = (event) => {
    setOrdination(event.target.value);
  }
  
  

  const totalProducts = productList.length; 

  let sortedProducts = [...productList]; 

  if (ordination === 'Crescente') {
    sortedProducts.sort((a, b) => a.value - b.value);
  } else if (ordination === 'Decrescente') {
    sortedProducts.sort((a, b) => b.value - a.value);
  }

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
        {sortedProducts.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            value={product.value}
            imgUrl={product.imageUrl}
          />
        ))}
      </main>
    </HomeContainer>
  );
};

export default Home;