import { CardProduto } from "../CardProduto/CardProduto"
import { HomeContainer } from "./style"
import { useState } from "react"
 
export function Home(props) {

    const [ordem, setOrdem] = useState("")
    
    function handleOrdem (e) {
        setOrdem(e.target.value)
    }

    return (
        <HomeContainer>
            <p>Quantidade de Produtos: {props.listaProdutos.length}</p>
            <div id="input">
            <label>Ordenação:</label>
            <select onChange={handleOrdem} value={ordem}>
                <option>Ordenar</option>
                <option value="crescente">Crescente</option>
                <option value="decrescente">Decrescente</option>
            </select>
            </div>
            <div id="containerProdutos">
            <CardProduto listaProdutos={props.listaProdutos} addCarrinho={props.addCarrinho}/>
            </div>
        </HomeContainer>
    )
}