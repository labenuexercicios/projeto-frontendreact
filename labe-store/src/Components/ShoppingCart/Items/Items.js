import { DivItens, ButtonRemove, H3 } from "./itemsStyle"

export default function Items({product, deleteProductCart}){

    
    return(
        <DivItens>        
            <div>
                {product.image}
            </div>

            <div>
                <H3>R${product.value.toFixed(2)* product.amount.toFixed(2)}</H3>
                <H3>Quantidade: {product.amount}</H3>
                <ButtonRemove onClick={()=> deleteProductCart(product)}>REMOVER</ButtonRemove> 
            </div>

        </DivItens>
    )
}