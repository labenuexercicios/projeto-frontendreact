import { CaixaProdutos, HomeCaixa, InfoHome } from "./HomeStyle";
import ProductCard from "../ProductCard/ProductCard";



function Home() {
  return (
    <HomeCaixa>
      <InfoHome>
      <span>Quantidade de Produtos 2</span>
      <span>Ordenação: <select>
        <option>Crescente</option>
        <option>Decrescente</option>
        </select>
        </span>
        </InfoHome>
        <CaixaProdutos>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      </CaixaProdutos>
    </HomeCaixa>
  );
}

export default Home;
