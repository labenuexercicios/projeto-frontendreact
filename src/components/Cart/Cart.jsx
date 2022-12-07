import { CartSection } from "./style"
import { BsFillCartFill } from 'react-icons/bs'
import { CartProduct } from "../CartProduct/CartProduct"

export const Cart = (props) => {

    const totalPrice = props.saleCart.reduce((acumulator, current)=>{
        const sumPrice = acumulator + current.price
        return sumPrice
    }, 0)

    return(
        <CartSection>
            <header>
                <BsFillCartFill style={{margin:'10px'}}/>
                <h6>CARRINHO</h6>
            </header>
            <article>
                {props.saleCart.map((cartItem, index)=>{
                    return <CartProduct key={index} nave={cartItem} 
                    clickedItemIndex = {index}
                    removeToCart={props.removeToCart}/>    
                })}
            </article>
            <article>Total: {"R$" + totalPrice.toFixed(2)}</article>
            <button>Comprar</button>
        </CartSection>
    )
}
