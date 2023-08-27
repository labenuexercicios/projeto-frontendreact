import { Produtos } from "../Produtos/Produtos";
import { HomeContainer, HomeOrdenacao, HomeCard } from "./styleHome";
import { ProdutosCard } from "../Produtos/styleProdutos";
import { listaDeProdutos } from "../../assents/ListaDeProdutos";

function Home(props) {
  const { id, nomeDoProduto, preco, imagem } = listaDeProdutos;
  return (
    <>
      <HomeContainer>
        <h1>Home</h1>
        <HomeOrdenacao>
          <label>
            Quantidade de produtos: {listaDeProdutos.length}
            {/* <select>
              <option>10</option>
              <option>20</option>
              <option>50</option>
              <option>100</option>
            </select> */}
          </label>
          <label>
            Ordenação:
            <select>
              <option>Crescente</option>
              <option>Decrescente</option>
            </select>
          </label>
        </HomeOrdenacao>

        <HomeCard>
          <Produtos
            id={props.id}
            nomeDoProduto={props.nomeDoProduto}
            preco={props.preco}
            imagem={props.imagem}
          />
          <Produtos
            id={props.id}
            nomeDoProduto={props.nomeDoProduto}
            preco={props.preco}
            imagem={props.imagem}
          />
          <Produtos
            id={props.id}
            nomeDoProduto={props.nomeDoProduto}
            preco={props.preco}
            imagem={props.imagem}
          />
        </HomeCard>
      </HomeContainer>
    </>
  );
}

export default Home;
