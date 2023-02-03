import { CardProduto } from "../CardProduto/CardProduto"
import { HomeContainer } from "./style"

export function Home() {
    return (
        <HomeContainer>
            <div id="input">
            <label>Ordenação:</label>
            <select></select>
            </div>
            <div id="containerProdutos">
            <CardProduto />
            <CardProduto />
            <CardProduto />
            <CardProduto />
            <CardProduto />
            <CardProduto />
            <CardProduto />
            <CardProduto />
            <CardProduto />
            
            </div>
        </HomeContainer>
    )
}