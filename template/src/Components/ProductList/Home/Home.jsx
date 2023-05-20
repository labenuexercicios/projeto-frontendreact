import { useState } from "react"
import { ProductCard } from "../ProductCard/ProductCard"
import {HomeStyle} from "./HomeStyle"

export const Home =({products, addProduct})=>{
    const[ordination,setOrdination] = useState("")
    const onChangeOrdination =(e)=>{setOrdination(e.target.value)}
    return(
        <HomeStyle>
            <div>
                <p>Quantidade de produtos: {products.length}</p>
        <label> Ordenação
            <select value={ordination} onChange={onChangeOrdination}> 
                <option>Crescente</option>
                <option>Decrescente</option>
            </select>
        </label>
            </div>
            {products.map((product,indice)=>{return <ProductCard key={indice} product={product} addProduct={addProduct}/>})}
        </HomeStyle>
    )
}