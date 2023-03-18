import { ContainerCarts } from "./CartStyle"
import Items from "../Items/Items"
import { Carrinho } from "./CartStyle"
const Cart = (props) => {
    
    
    return (
        <ContainerCarts>
            <Carrinho>carrinho</Carrinho>
            {props.product.map((prod, index)=>{
                return (<Items
                    key={index}
                    name={prod.name}

                />)
            }) }
          
        </ContainerCarts>

    )
}
export default Cart