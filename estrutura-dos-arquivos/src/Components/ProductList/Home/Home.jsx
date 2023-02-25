
import productList from "../../assents/productsList"
import ProductCard from "../ProductCard/ProductCard"
import { Header } from "./HomeStyle"
import  { useState } from "react"


function Home() {

    const [ordination, setOdination] = useState('') 
    
    const onChangeOrdination =(e)=>{
        setOdination(e.target.valeu)
    }

    //console.log(ordination)

    return (
        <div>
            <Header>
                <p>Quantidade de produtos</p>
                <p>Ordenação<select>
                    <option value={ordination} onChange={onChangeOrdination}>Crescente</option>
                    <option value={ordination} onChange={onChangeOrdination}>Decrescente</option>
                </select></p>
            </Header>
            <ProductCard productList = {productList}/>
        </div>
    )
}

export default Home
