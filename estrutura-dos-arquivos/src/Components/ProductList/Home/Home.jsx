
import productList from "../../assents/productsList"
import ProductCard from "../ProductCard/ProductCard"
import { Header } from "./HomeStyle"


function Home() {
    return (
        <div>
            <Header>
                <p>Quantidade de produtos</p>
                <p>Ordenação<select>
                    <option value="crescente">Crescente</option>
                    <option value="Decrescente">Decrescente</option>
                </select></p>
            </Header>
            <ProductCard productList = {productList}/>
        </div>
    )
}

export default Home
