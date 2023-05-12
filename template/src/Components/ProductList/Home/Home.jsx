import { ProductCard } from "../ProductCard/ProductCard"
import {HomeStyle} from "./HomeStyle"

export const Home =()=>{
    return(
        <HomeStyle>
            <div>
                <p>Quantidade de produtos:</p>
        <label> Ordenação
            <select> 
                <option>Crescente</option>
                <option>Decrescente</option>
            </select>
        </label>
            </div>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        </HomeStyle>
    )
}