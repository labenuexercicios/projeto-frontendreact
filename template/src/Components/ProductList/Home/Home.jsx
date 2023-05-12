import { ProductCard } from "../ProductCard/ProductCard"
import {HomeStyle} from "./HomeStyle"

export const Home =({produtos})=>{
    return(
        <HomeStyle>
            <div>
                <p>Quantidade de produtos: {produtos.length}</p>
        <label> Ordenação
            <select> 
                <option>Crescente</option>
                <option>Decrescente</option>
            </select>
        </label>
            </div>
        <ProductCard produto={produtos[0]}/>
        <ProductCard produto={produtos[1]}/>
        <ProductCard produto={produtos[2]}/>
        </HomeStyle>
    )
}