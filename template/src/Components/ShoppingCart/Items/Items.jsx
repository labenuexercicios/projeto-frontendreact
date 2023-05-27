import {CartStyle} from "./ItemsStyle"

export const Items =({product,removeProduct})=>{
    
    return(
        <>
        <CartStyle>
            <img src={product.imageUrl}/>
            <div>
                <h4 className="qnt">{product.quantity}x </h4>
                <p> {product.name}</p>
                <h5 className="value"> {product.value.toFixed(2).replace(".",",")}R$  </h5>
            </div>
            <button onClick={()=>{removeProduct(product)}}>Remover</button>
        </CartStyle>
        </>
    )
}