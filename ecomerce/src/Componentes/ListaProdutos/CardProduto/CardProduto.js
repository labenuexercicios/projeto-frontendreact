import {Produto} from "./style"

export function CardProduto(props) {
    return(
        <Produto>
            <img src={props.produto.img}/>
            <p>{props.produto.nome}</p>
            <p>R$ {props.produto.valor.toFixed(2)}</p>
            <button>Adicionar ao Carrinho</button>
        </Produto>
    )
}