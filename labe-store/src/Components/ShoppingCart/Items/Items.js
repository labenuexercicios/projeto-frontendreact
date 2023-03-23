import { DivItens, ButtonRemove } from "./itemsStyle"

export default function Items({product, deleteProductCart}){

    
    return(
        <DivItens>        
            
            <h3>{product.name}</h3>
            <h3>Valor: R${product.value.toFixed(2)* product.amount.toFixed(2)}</h3>
            <h3>Quantidade: {product.amount}</h3>
            <ButtonRemove onClick={()=> deleteProductCart(product)}>REMOVER</ButtonRemove> 

        </DivItens>
    )
}