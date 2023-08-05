import ProductCard from "../ProductCard/ProductCard";
import { HomeContainer } from "./HomeStyle";

const Home = () => {
    return (
        <HomeContainer>
            <header>
            <p>Quantidade de Produtos:</p>
            <p>Ordenação:</p>
            </header>
            <main>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            </main>
        </HomeContainer>
    )
}

export default Home;