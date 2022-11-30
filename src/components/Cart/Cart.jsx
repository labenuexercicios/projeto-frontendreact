import { CartSection } from "./style"
import { BsFillCartFill } from 'react-icons/bs'

export const Cart = () => {

    return(
        <CartSection>
            <BsFillCartFill     style={{margin:'10px'}}/>
        </CartSection>
    )
}