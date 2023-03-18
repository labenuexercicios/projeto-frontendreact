import { useState } from "react"
import productList from "../assents/productsList";
import { ContainerHeader } from "./HeaderStyled"

const Header = () => {
    const [ordination, setOrdination]= useState(0)
    

    return (
        <ContainerHeader>
            <p>Quantidade de produtos:{productList.length}</p>
            <p>Ordenação:
                <select value={ordination} onChange={(e)=>setOrdination(e.target.value)}>
                    <option value="">Ordenar</option>
                    <option value="crescente">Crescente</option>
                    <option value="decrescente">Decrecente</option>
            </select></p>
        </ContainerHeader>

    )
}
export default Header