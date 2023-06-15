import { Card, Dados } from './ProductCardStyle'

function ProductCard(props) {


    const { produto } = props
    const { addCart } = props


    return (
        <Card>
            <img src={props.img} alt='img'/>
            <Dados>
                <p>{props.name}</p>
                <p>{props.valor}</p>

                <button 
                onClick={() => addCart({produto})}
                >Adicionar ao carrinho</button>

            </Dados>
        </Card>
        
    )
}

export default ProductCard;