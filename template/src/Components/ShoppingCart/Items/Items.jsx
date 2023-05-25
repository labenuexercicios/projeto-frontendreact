import {CartStyle} from "./ItemsStyle"

export const Items =({product,removeProduct})=>{
    
    return(
        <>
        <CartStyle>
        <div>
            <img src={product.imageUrl}/>
            <p className="qnt">{product.quantity}x {product.name} </p>
            <p className="value"> {product.value.toFixed(2).replace(".",",")}R$  </p>
        <button onClick={()=>{removeProduct(product)}}>Remover</button>
        </div>
        </CartStyle>
        </>
    )
}