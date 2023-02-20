
import ProductCard from "../ProductCard/ProductCard"
import { Header } from "./HomeStyle"


function Home() {
    return (
        <div>
            <Header>
                <p>Quantidade de produtos</p>
                <p>Ordenação</p>
                <select>
                    <option value="crescente">Crescente</option>
                    <option value="Decrescente">Decrescente</option>
                </select>
            </Header>
            <ProductCard />
        </div>
    )
}

export default Home
