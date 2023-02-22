import ProductCard from "../ProductCard/ProductCard"
import { HomeStyle, Ordination } from "./HomeStyle"

export default function Home(props) {

    console.log(props.productsList1)
    return (
        <HomeStyle>
            <Ordination>
                <p>Quantidade de produtos:</p>
                <p>Ordenação:
                    <select>
                        <option></option>
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