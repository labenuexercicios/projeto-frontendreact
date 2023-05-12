import CardProdutos from "../CardProdutos/CardProdutos"
import { ListaDeProdutosContaiener } from "./Styles"


function ListaDeProdutos() {

    return (
        <ListaDeProdutosContaiener>
            <main>
                <CardProdutos />
                <CardProdutos />
                <CardProdutos />
                <CardProdutos />
            </main>
        </ListaDeProdutosContaiener>
    )
}


export default ListaDeProdutos