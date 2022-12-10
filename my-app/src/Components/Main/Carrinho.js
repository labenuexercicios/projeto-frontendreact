import {BoxLateralCarrinho} from "./styles"
import Home from "./Home"

function Carrinho (props){

    let totalCarrinho = 0

    const somaCarrinho = ()=>{
        for (let i = 0;i<props.cesta.length;i++){
            totalCarrinho += props.cesta[i].precototal
        }
        return
    }

    const removeItem = (produto)=>{
        const buscaItem = props.cesta.filter((item) => item !== produto)
        
        props.setCesta(buscaItem)
    }

    somaCarrinho()

    return(
        <BoxLateralCarrinho>
        <h2>Carrinho:</h2>
        
            {props.cesta.map((produto,index)=>{
            return(
                <div key={index} onDoubleClick={()=>removeItem(produto)}>
                <p><span>X{produto.quantidade} </span><span>{produto.nome} </span><span> <b>{produto.precototal.toFixed(2)}</b></span></p>
                </div>
            )    
        })}
        
        <p><b>Valor total: R$ {totalCarrinho.toFixed(2)}</b></p>
        <button onClick={()=>props.carrinhoCompleto(2)}>Acessar Carrinho</button>
        </BoxLateralCarrinho>
    )
}

export default Carrinho