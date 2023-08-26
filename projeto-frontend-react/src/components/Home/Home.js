import { HomeCabecalho, HomeContainer, HomeProdutos } from "./HomeStyle";
import { Produtos } from "./Produtos/Produtos";

export function Home() {
  return (
    <HomeContainer>
      <h2>Home</h2>
      <HomeCabecalho>
        <h5>Quantidade de produtos:</h5>
        <p>0 produtos</p>
        <h5>Ordenação:</h5>
        <select>
          <option>Crescente</option>
          <option>Decrescente</option>
        </select>
      </HomeCabecalho>
      <HomeProdutos>
        <Produtos />
        <Produtos />
        <Produtos />
      </HomeProdutos>
    </HomeContainer>
  );
}
