import { CardContainer, ButtunAdicionar, Photo } from "./ProductCardStyled"

export function ProductCard () {
    return (
        <CardContainer>
            <Photo>Foto</Photo>
            <p>Nome do Produto</p>
            <p>Valor:</p>
            <ButtunAdicionar>Adicionar ao Carrinho</ButtunAdicionar>
        </CardContainer>
    )
}

export default ProductCard