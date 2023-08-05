import { CardContainer } from "./ProductCardStyle";


const ProductCard = () => {
    return (
        <CardContainer>
            <div id="card">
            <p>ProductCard</p>
            </div>
            <div id='descricao'>
                <p>Nome do Produto</p>
                <p>Valor</p>
                <button>Adicionar ao carrinho</button>
            </div>
        </CardContainer>
    )
}

export default ProductCard;