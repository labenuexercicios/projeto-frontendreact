import { Produtos } from "../Produtos/Produtos";
import { HomeContainer, HomeOrdenacao, HomeCard } from "./styleHome";
import { ProdutosCard } from "../Produtos/styleProdutos";
import { useState } from "react";

function Home(props) {
  const { listaDeProdutos } = props;
  const [ordination, setOrdination] = useState("")


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
            <select 
              value={ordination}
              onChange={(event)=>{setOrdination(event.target.value)
              }}
            >
              <option>Crescente</option>
              <option>Decrescente</option>
            </select>
          </label>
        </HomeOrdenacao>

        <HomeCard>
          {listaDeProdutos.map((produto) => {
            return (
              <Produtos
                key={produto.id}
                nomeDoProduto={produto.nomeDoProduto}
                preco={produto.preco}
                imagem={produto.imagem}
              />
            )
          })}
        </HomeCard>
      </HomeContainer>
    </>
  );
}

export default Home;
