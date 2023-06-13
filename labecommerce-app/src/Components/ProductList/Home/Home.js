import ProductCard from "../ProductCard/ProductCard";
import { HomeStyle, Header, Container, Select } from './HomeStyle'

function Home(props) {

  const { meusProdutos } = props

    
  
    return (
        <HomeStyle>
            <Header>
                <p>Quantidade de produtos: {meusProdutos.lenght}</p>
                
                <label>Ordenação:
                    <Select>
                        <option>
                            Crescente
                        </option>
                        <option>
                            Decrescente
                        </option>
                    </Select>
                </label>
            </Header>
            <Container>
            {meusProdutos.map((produto) => {
              return (
                <ProductCard
                name={produto.name}
                valor={produto.value}
                img={produto.imageUrl}
                
                />
            );
          })}
                

            </Container>
        </HomeStyle>
    )
}

export default Home;