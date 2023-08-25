import Produtos from "../Produtos/Produtos";
import { HomeContainer, Section, Div, Card } from "./styleHome";


function Home() {
  return (
    <>
      <HomeContainer>
        {/* <h1>Home</h1> */}
        <Div>
        <label>
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
        </Div>
        <Section>
        <Div className="Card">
          <img src="https://picsum.photos/100/100?a=1" alt=""></img>
          <h4>Informações do produto</h4>
        </Div>
          <img src="https://picsum.photos/100/100?a=2" alt=""></img>
          <h4>Informações do produto</h4>
          <img src="https://picsum.photos/100/100?a=3" alt=""></img>
          <h4>Informações do produto</h4>
          <img src="https://picsum.photos/100/100?a=4" alt=""></img>
          <img src="https://picsum.photos/100/100?a=5" alt=""></img>
          <img src="https://picsum.photos/100/100?a=6" alt=""></img>
        </Section>
        
        {/* <Produtos /> */}
      </HomeContainer>
    </>
  );
}

export default Home;
