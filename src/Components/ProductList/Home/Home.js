import { CaixaProdutos, HomeCaixa, InfoHome } from "./HomeStyle";
import ProductCard from "../ProductCard/ProductCard";
import { productList } from "../../../assents/productList";



function Home({listaDeProdutos}) {
  console.log(listaDeProdutos)
  return (
    <HomeCaixa>
      <InfoHome>
      <span>Quantidade de Produtos: {listaDeProdutos.length}</span>
      <span>Ordenação: <select>
        <option>Crescente</option>
        <option>Decrescente</option>
        </select>
        </span>
        </InfoHome>
        <CaixaProdutos>
      <ProductCard listaDeProdutos={listaDeProdutos[0]}/>
      <ProductCard listaDeProdutos={listaDeProdutos[1]}/>
      <ProductCard listaDeProdutos={listaDeProdutos[2]}/>
     
      </CaixaProdutos>
    </HomeCaixa>
  );
}

export default Home;
