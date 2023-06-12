import { Card, Dados } from './ProductCardStyle'


function ProductCard() {

  
    
  
    return (
        <Card>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/1200px-OSIRIS_Mars_true_color.jpg"/>
            <Dados>
                <p>Nome do produto:</p>
                <p>Valor</p>
                <button>Adicionar ao carrinho</button>
            </Dados>
        </Card>
        
    )
}

export default ProductCard;