import ProductCard from "../ProductCard";
import { Container, Header, ProductGrid } from "./styles";

const Home = () => {
  return(
    <>
    <Container>
      <Header>
    <p>Quantidade de Produtos: 0</p>
    <select name="crescente" id="crescente">
      <option value="crescente">crescente</option>
      <option value="decrescente">decrescente</option>
    </select>
    </Header>
    <ProductGrid>
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    </ProductGrid>
    </Container>
    </>
  )
}

export default Home;