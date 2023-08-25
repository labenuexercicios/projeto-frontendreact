// import elastico-verde from "./imagens/elastico-verde.png"
import { Section, HomeCard } from "./styleProdutos";
import elasticoverde from "../Imagens/elasticoverde.png"
import mascara01 from "../Imagens/mascara01.png"


function Produtos(){
  return(
    <>
      {/* <h1>Produtos</h1> */}
      <Section>
          <HomeCard>
            <img src={mascara01} alt=""></img>
            <h4>Máscara</h4>
            <p>R$ 10,00</p>
            <button>Adicionar carrinho</button>
            
          </HomeCard>
          <HomeCard>
            <img src={elasticoverde} alt=""></img>
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
        </Section>
    </>
  )  
}

export default Produtos