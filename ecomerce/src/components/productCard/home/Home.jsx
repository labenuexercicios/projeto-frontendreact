import ProductList from "../productList/ProductList"
import { HomeBox } from "./homeStyle"
import { ProductBox } from "./homeStyle"
import { CardsBox } from "./homeStyle"

function Home({ productList }) {
    console.log(productList)
    return (
        <>
            <HomeBox>
                <ProductBox>
                    <span>Quantidade de produtos:{productList.length}</span>
                    <span>Ordernação:
                        <select >
                            <option>Crescente</option>
                            <option>Decrescente</option>
                        </select>
                    </span>
                </ProductBox>
                <CardsBox>
                    <ProductList productList={productList[0]} />
                    <ProductList productList={productList[1]} />
                    <ProductList productList={productList[2]} />
                </CardsBox>
            </HomeBox>
        </>
    )
}
export default Home