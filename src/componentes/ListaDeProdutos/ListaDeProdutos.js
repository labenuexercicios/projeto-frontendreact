import CardProdutos from "../CardProdutos/CardProdutos"
import { ListaDeProdutosContaiener } from "./Styles"


function ListaDeProdutos(props) {

    const { produto } = props

    const renderList = produto.map(prod => {
        return (
            <CardProdutos key={prod.id}
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