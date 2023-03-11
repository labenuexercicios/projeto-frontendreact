import { CartMenu, H1Cart } from "./styled"
import { Itens } from "./Itens"


export function Cart({AllProducts, cart, amount, onChangeAmount, onChangeCart}) {
    return (
        <div>
             <CartMenu>
                <H1Cart><b>Carrinho</b></H1Cart>

                <Itens/>
             </CartMenu>
            
        </div>
    )
}