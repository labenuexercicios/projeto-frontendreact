import { CartSection } from "./style"
import { BsFillCartFill } from 'react-icons/bs'

export const Cart = (props) => {

    return(
        <CartSection>
            <BsFillCartFill style={{margin:'10px'}}/>
            <h6>CARRINHO</h6>
            <p>scd</p>
        </CartSection>
    )
}