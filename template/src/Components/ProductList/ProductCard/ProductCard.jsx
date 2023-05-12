import { Produto, Div } from "./ProductCardStyle"

export const ProductCard =()=>{
    return(
        
        <Produto>
            <img src="https://picsum.photos/400/400?a=1 " alt="imagem produto"/>
            <Div>
                <h4>Nome do produto</h4>
                <p>Valor:</p>
                <button>Add ao carrinho</button>
            </Div>
            
        </Produto>
    )
}