import ProductCard from "../ProductCard/ProductCard"
import { HomeContainer, Produtos, Ordenação, Title, Cards } from "./HomeStyled"

export function Home ({productList}) {

    return (
        <HomeContainer>
            <Title>Quantidade de produtos: {productList.length}</Title>
            <Produtos>
                <Ordenação>
                    <p>Ordenação</p>
                    <button>Crescente</button>
                </Ordenação>
            </Produtos>
            <Cards>
                {productList.map((productList)=>{
                    return (
                        <ProductCard
                            key={productList.id}
                            productList={productList}
                        ></ProductCard>
                    )
                })}
            </Cards>
        </HomeContainer>
    )
}

export default Home