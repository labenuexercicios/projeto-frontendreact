import {Produto} from "./style"

export function CardProduto(props) {
    return(
        <Produto>
            <img src={props.produto.img}/>
            <p>{props.produto.nome}</p>
            <p>{props.produto.valor.toFixed(2)} R$</p>
            <button>Adicionar ao Carrinho</button>
        </Produto>
    )
}