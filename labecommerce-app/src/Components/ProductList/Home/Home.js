import ProductCard from "../ProductCard/ProductCard";
import { HomeStyle, Header, Container, Select } from './HomeStyle'

function Home() {

  
    
  
    return (
        <HomeStyle>
            <Header>
                <p>Quantidade de produtos</p>
                
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
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>

            </Container>
        </HomeStyle>
    )
}

export default Home;