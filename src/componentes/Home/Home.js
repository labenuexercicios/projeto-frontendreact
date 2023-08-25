import Produtos from "../Produtos/Produtos";
import { HomeContainer, HomeOrdenacao } from "./styleHome";


function Home() {
  return (
    <>
      <HomeContainer>
        {/* <h1>Home</h1> */}
        <HomeOrdenacao>
          <label>
            TEXTO INSERIDO, MAS DEVE SER APAGADO...
            Quantidade de produtos:
            <select>
              <option>10</option>
              <option>20</option>
              <option>50</option>
              <option>100</option>
            </select>
          </label>
          <label>
            Ordenação:
            <select>
              <option>Crescente</option>
              <option>Decrescente</option>
            </select>
          </label>
        </HomeOrdenacao>
        {/* <Section>
          <HomeCard>
            <img src="https://picsum.photos/50/50?a=1" alt=""></img>
            <h4>Informações do produto</h4>
            <p>R$ 10,00</p>
            <button>Adicionar carrinho</button>
            
          </HomeCard>
          <HomeCard>
            <img src="https://picsum.photos/50/50?a=2" alt=""></img>
            <h4>Informações do produto</h4>
            <p>R$ 10,00</p>
            <button>Adicionar carrinho</button>
          </HomeCard>
          <HomeCard>
            <img src="https://picsum.photos/50/50?a=3" alt=""></img>
            <h4>Informações do produto</h4>
            <p>R$ 10,00</p>
            <button>Adicionar carrinho</button>
            
          </HomeCard>
        </Section> */}

        <Produtos />
      </HomeContainer>
    </>
  );
}

export default Home;
