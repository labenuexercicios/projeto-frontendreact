import { CardProdutosContainer } from "./CardProdutosStyles"

function CardProdutos(props) {
    console.log(props)
    const { img, nome, valor } = props

    return (

        <CardProdutosContainer>
            <img src={img} alt={nome} />
            <h2>{nome}</h2>
            <p>{valor}</p>
        </CardProdutosContainer>
    )

}

export default CardProdutos