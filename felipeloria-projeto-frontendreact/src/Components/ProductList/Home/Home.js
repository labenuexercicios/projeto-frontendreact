import ProductCard from "../ProductCard/ProductCard"
import { HomeContainer, Produtos, Ordenação, Title, Cards } from "./HomeStyled"

export function Home () {
    return (
        <HomeContainer>
            <Title>Quantidade de produtos</Title>
            <Produtos>
                <Ordenação>
                    <p>Ordenação</p>
                    <button>Crescente</button>
                </Ordenação>
            </Produtos>
            <Cards>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
            </Cards>
        </HomeContainer>
    )
}

export default Home