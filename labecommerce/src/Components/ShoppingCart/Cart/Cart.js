import Items from '../Items/Items'
import { CartStyle } from './styled';

const Cart = () => {
    return (
      <CartStyle>
        <h2>Carrinho</h2>
        <Items/>
      </CartStyle>
      
    );
}

export default Cart