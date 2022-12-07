import { AddProduct } from "./style"

export const CartProduct = (props) => {

    return(
        <AddProduct>
            <h6>{props.nave.nave} - R${props.nave.price}</h6>
            <button onClick={() => props.removeToCart(props.clickedItemIndex)}>X</button>
        </AddProduct>
    )
}