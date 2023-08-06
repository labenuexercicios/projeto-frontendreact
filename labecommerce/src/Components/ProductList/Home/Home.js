import { productList } from "../../../assets/productList";
import ProductCard from "../ProductCard/ProductCard";
import { HomeContainer } from "./HomeStyle";

const Home = (props) => {

  const totalProducts = productList.length;

  return (
    <HomeContainer>
      <header>
        <p>Quantidade de Produtos: {totalProducts}</p>
        <div id="order">
          <p>Ordenação:</p>
          <select>
            <option value="opcao1">Crescente</option>
            <option value="opcao2">Decrescente</option>
            <option value="opcao3">Melhor Avaliação</option>
          </select>
        </div>
      </header>
      <main>
        {productList.map((product) => (
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
