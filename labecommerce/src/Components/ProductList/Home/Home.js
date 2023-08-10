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

  return (
    <HomeContainer>
      <header>
        <p>Quantidade de Produtos: {totalProducts}</p>
        <div id="order">
          <p>Ordenação:</p>
          <select value={ordination} onChange={handleOrdination}>
            <option value="opcao1">Crescente</option>
            <option value="opcao2">Decrescente</option>
            <option value="opcao3">Melhor Avaliação</option>
          </select>
        </div>
      </header>
      <main>
        {productList.sort((a, b) => ordination === 'Crescente' || ordination === 'Decrescente' || ordination === 'Melhor Avaliação').map((product) => (
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
