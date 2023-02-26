import { useState } from "react"
import ProductCard from "../ProductCard/ProductCard"
import { HomeStyle, Ordination } from "./HomeStyle"

export default function Home(props) {
    const [productsList1, productsList2, productsList3] = props.productsList

    const [ordination, setOrdination] = useState('')


    
    return (
        <HomeStyle>
            <Ordination>
                <p>Quantidade de produtos: {props.productsList.length}</p>
                <p>Ordenação:
                    <select>
                        <option>Crescente</option>
                        <option>Decrescente</option>
                        <option>Valor</option>
                    </select>
                </p>
            </Ordination>
            <div>
            <ProductCard
            product1 = {productsList1}
            product2 = {productsList2}
            product3 = {productsList3}
            />
            </div>
        </HomeStyle>
    )

}