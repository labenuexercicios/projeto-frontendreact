import { Card, Dados } from './ProductCardStyle'


function ProductCard(props) {

    const { addCart } = props

    return (
        <Card>
            <img src={props.img}/>
            <Dados>
                <p>{props.name}</p>
                <p>{props.valor}</p>
                <button 
                onClick={addCart}
                >Adicionar ao carrinho</button>
            </Dados>
        </Card>
        
    )
}

export default ProductCard;