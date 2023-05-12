import CardProdutos from "../CardProdutos/CardProdutos"
import { ListaDeProdutosContaiener } from "./Styles"


function ListaDeProdutos(props) {

    const { results } = props

    const renderList = results.map(prod => {
        return (
            <CardProdutos
                img={prod.image}
                nome={prod.title}
                valor={prod.price}
            />
        )
    })

    return (
        <ListaDeProdutosContaiener>
            <main>
                {renderList}
            </main>
        </ListaDeProdutosContaiener>
    )
}


export default ListaDeProdutos