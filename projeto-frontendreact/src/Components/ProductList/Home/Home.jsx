import { ProductCard } from "../ProductCard/ProductCard";
import { HomeCaixa0, HomeCaixa1, HomeCaixa2 } from "./homeStyled";

export function Home() {
  return (
    <>
      <HomeCaixa0>
        <HomeCaixa1>
          <span>Quantidade de produtos</span>
          <span>
            Ordenação:
            <select>
              <option>Crecente </option>
              <option>Decrecente</option>
            </select>
          </span>
        </HomeCaixa1>

        <HomeCaixa2>
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </HomeCaixa2>
      </HomeCaixa0>
    </>
  );
}
