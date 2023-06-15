import { meusProdutos } from "../../../assents/productList";
import Itens from "../Itens/Itens";
import { CartStyle } from './CartStyle'

function Cart(props) {

    const { cart } = props
    const { amount } = props
    const { produto } = props
    const { removeCart } = props
    
    return (
        <CartStyle>
            <h1>Cart</h1>
            {cart.map((produto, index) => {
                return (
                    <Itens key={index}
                        cart={cart}
                        produto={produto}
                        removeCart={removeCart}
                        name={produto.name}
                        valor={produto.value}
                        id={produto.id}
                        qtd={produto.qtd}
                    />
                )
            })}
                       
            <p>Valor total: R$ {amount} </p>
        </CartStyle>
    )
}

export default Cart;