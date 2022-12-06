import { CartSection } from "./style"
import { BsFillCartFill } from 'react-icons/bs'
import { CartProduct } from "../CartProduct/CartProduct"

export const Cart = (props) => {

    return(
        <CartSection>
            <header>
                <BsFillCartFill style={{margin:'10px'}}/>
                <h6>CARRINHO</h6>
            </header>
            <article>
                {props.saleCart.map((cartItem, index)=>{
                    return <CartProduct key={index} nave={cartItem} 
                    itemIndex = {index}
                    removeToCart={props.removeToCart}/>    
                })}
            </article>
            <button>Comprar</button>
        </CartSection>
    )
}
