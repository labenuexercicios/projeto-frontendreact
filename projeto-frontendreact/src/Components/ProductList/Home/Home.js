import ProductCard from "../ProductCard/ProductCard"
import { HomeStyle, Ordination } from "./HomeStyle"

export default function Home() {
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
            <ProductCard />
            </div>
        </HomeStyle>
    )

}