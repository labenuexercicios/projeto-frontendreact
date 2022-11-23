import { Card } from "./styles";
import { getFeature } from "../../utils/ReturnProductImage";

export function ProductsCard(props) {
    const { product } = props

    return (
        <Card>
            <img src={getFeature(product.feature)} alt="" />
            <span>{product.name}</span>
            <p>R$ {product.price.toFixed(2)}</p>
            <button>Adicionar ao carrinho</button>
        </Card>
    )
}