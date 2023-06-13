import Itens from "../Itens/Itens";
import { CartStyle } from './CartStyle'

function Cart(props) {

    const { meusProdutos } = props
    const { cart } = props
    const { amount } = props
    
  
    return (
        <CartStyle>
            <h1>Cart</h1>

            <Itens
            // onChange={handleMax}
            // value={maxFilter}
            />

            <p>Valor total</p>
        </CartStyle>
    )
}

export default Cart;