import { Produto, Div } from "./ProductCardStyle"

export const ProductCard =({product, addProduct})=>{
    return(
        
        <Produto>
            <img src={product.imageUrl} alt="imagem produto"/>
            <Div>
                <h4>{product.name}</h4>
                <p>Valor: {product.value.toFixed(2)} R$</p>
                <button onClick={()=>{addProduct(product)}}>Add ao carrinho</button>
            </Div>
        </Produto>
    )
}