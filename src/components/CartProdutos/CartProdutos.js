import { CartProdutosContainer, Image, Text } from "./CartProdutosStyles"



function CartProdutos(props) {
    const { img, nome, preco } = props

    return (

        <CartProdutosContainer>
            <Image src={img} alt={nome} />
            <Text>
                <h2>{nome}</h2>
                <p>{preco}</p>
                <button>Adicionar ao carrinho</button>
            </Text>
        </CartProdutosContainer>
    )

}

export default CartProdutos