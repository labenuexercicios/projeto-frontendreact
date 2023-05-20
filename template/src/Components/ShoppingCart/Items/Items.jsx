import {CartStyle} from "./ItemsStyle"

export const Items =({product,removeProduct})=>{
    
    return(
        <>
        <CartStyle>
        <div>
            <p>{product.quantity}x {product.name} {product.value.toFixed(2)}R$  </p>
        <button onClick={()=>{removeProduct(product)}}>Remover</button>
        </div>
        </CartStyle>
        </>
    )
}