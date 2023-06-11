import { HomeStyle } from "./homeStyle";
import ProductCard from "../../assents/productList"
import { useState } from 'react'

const Home = () => {
    const [ordination, setOrdination] = useState("")

    const ordenacao = (e) => {
        setOrdination(e.target.value)
    }

    
        return(
      <form>     
      <h1></h1>
      
        <select onChange={ordenacao} value={ordination}>
                   
        </select>
      </form>  
        )
    }

export default Home

