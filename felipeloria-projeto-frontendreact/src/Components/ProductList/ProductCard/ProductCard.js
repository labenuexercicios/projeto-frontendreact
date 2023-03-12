import { CardContainer, ButtunAdicionar } from "./ProductCardStyled"

export function ProductCard () {
    return (
        <CardContainer>
            <p>Foto</p>
            <p>Nome do Produto</p>
            <p>Valor</p>
            <ButtunAdicionar></ButtunAdicionar>
        </CardContainer>
    )
}

export default ProductCard