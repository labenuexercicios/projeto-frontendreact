import Itens from "../Itens/Itens";
import { CartStyle } from './CartStyle'

function Cart(props) {

    const { meusProdutos } = props
    
  
    return (
        <CartStyle>
            <h1>Cart</h1>

            <Itens
            // name={meusProdutos.name}
            />

            <p>Valor total</p>
        </CartStyle>
    )
}

export default Cart;