import { useState } from "react"
import ProductCard from "../ProductCard/ProductCard"
import { HomeStyle, Ordination } from "./HomeStyle"

export default function Home(props) {
    const [ordination, setOrdination] = useState('')
    
    return (
        <HomeStyle>
            <Ordination>
                <p>Quantidade de produtos: {props.productList}</p>
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
            product1 = {props.productsList1}
            product2 = {props.productsList2}
            product3 = {props.productsList3}
            />
            </div>
        </HomeStyle>
    )

}