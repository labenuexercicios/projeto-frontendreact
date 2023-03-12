import ProductCard from "../ProductCard/ProductCard"
import { HomeContainer, Produtos, Ordenação } from "./HomeStyled"

export function Home () {
    return (
        <HomeContainer>
            <Produtos>
                <p>Quantidade de produtos</p>
                <Ordenação>
                    <p>Ordenação</p>
                    <button>Crescente</button>
                </Ordenação>
            </Produtos>
            <ProductCard></ProductCard>
        </HomeContainer>
    )
}

export default Home