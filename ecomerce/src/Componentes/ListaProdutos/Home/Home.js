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
            <CardProduto produto={props.listaProdutos[0]} />
            <CardProduto produto={props.listaProdutos[1]}/>
            <CardProduto produto={props.listaProdutos[2]}/>
            <CardProduto produto={props.listaProdutos[3]}/>
            <CardProduto produto={props.listaProdutos[4]}/>
            </div>
        </HomeContainer>
    )
}