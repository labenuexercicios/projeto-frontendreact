import { Produto, Div } from "./ProductCardStyle"

export const ProductCard =({produto})=>{
    return(
        
        <Produto>
            <img src={produto.imageUrl} alt="imagem produto"/>
            <Div>
                <h4>{produto.name}</h4>
                <p>Valor: {produto.value} R$</p>
                <button>Add ao carrinho</button>
            </Div>
        </Produto>
    )
}