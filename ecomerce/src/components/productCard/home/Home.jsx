import ProductList from "../productList/ProductList"
import { HomeBox } from "./homeStyle"
import { ProductBox } from "./homeStyle"
import { CardsBox } from "./homeStyle"

function Home() {
    return (
        <>
            <HomeBox>
                <ProductBox>
                    <span>Quantidade de produtos:</span>
                    <span>Ordernação:
                        <select >
                            <option>Crescente</option>
                            <option>Decrescente</option>
                        </select>
                    </span>
                </ProductBox>
                <CardsBox>
                    <ProductList />
                    <ProductList />
                    <ProductList />
                </CardsBox>
            </HomeBox>
        </>
    )
}
export default Home