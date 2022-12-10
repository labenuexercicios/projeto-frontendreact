import { BoxCarrinhoLateral } from "./styled"

const CarrinhoLateral = (props) =>{
    return(
    <BoxCarrinhoLateral>
        <h2>Carrinho:</h2>

        {props.carrinho.map((tenis, index) => {
            return (
                <div key={index} >
                    <p><span>X{tenis.qtd} </span><span>{tenis.name} </span><span> <b>{tenis.precototal.toFixed(2)}</b></span></p>
                </div>
            )
        })}

        <p><b>Valor total: R$ {props.totalCarrinho.toFixed(2)}</b></p>
        <button >Acessar Carrinho</button>
    </BoxCarrinhoLateral>
    )
}

export default CarrinhoLateral