import { useState } from "react"
import { ProductCard } from "../ProductCard/ProductCard"
import {HomeStyle} from "./HomeStyle"

export const Home =({produtos})=>{
    const[ordination,setOrdination] = useState("")
    const onChangeOrdination =(e)=>{setOrdination(e.target.value)}
    return(
        <HomeStyle>
            <div>
                <p>Quantidade de produtos: {produtos.length}</p>
        <label> Ordenação
            <select value={ordination} onChange={onChangeOrdination}> 
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