import ProductList from "../productList/ProductList"
import { HomeBox } from "./homeStyle"
import { ProductBox } from "./homeStyle"
import { CardsBox } from "./homeStyle"
import { useState } from 'react'

function Home({
    productList,
    amount,
    setAmout,
    cart,
    setCart,
}) {
    const [ordination, setOrdination] = useState("");

    function handSelect(event) {
        setOrdination(event.target.value)

    }
    return (
        <>
            <HomeBox>
                <ProductBox>
                    <span>Quantidade de produtos:{productList.length}</span>
                    <span>Ordernação:
                        <select value={ordination} onChange={handSelect}>
                            <option value=""></option>
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