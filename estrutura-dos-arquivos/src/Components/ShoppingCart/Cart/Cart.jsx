import { ContainerCarts } from "./CartStyle"
import Items from "../Items/Items"
import { Carrinho } from "./CartStyle"
const Cart = (props) => {
    
   
    return (
        
        <ContainerCarts>
            <Carrinho>carrinho</Carrinho>
            {props.cart.map((item, index) => {
                return (<Items
                    key={index}
                    item={item}
                    cart={props.cart}
                    setCart={props.setCart}
                    amount={props.amount}
                    setAmount={props.setAmount}
                    product={props.product}
                    currencyBrazil={props.currencyBrazil}

                />)

            })}
        </ContainerCarts>
    
    )
}
export default Cart