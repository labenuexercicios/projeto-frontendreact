import { CardProduto } from "../CardProduto/CardProduto"
import { HomeContainer } from "./style"
 
export function Home(props) {

    return (
        <HomeContainer>
            <p>Quantidade de Produtos: {props.listaProdutos.length}</p>
            <div id="input">
            <label>Ordenação:</label>
            <select></select>
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