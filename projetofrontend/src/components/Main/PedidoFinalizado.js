import {ContainerFinalizado, StatusPedido} from "./stylePedidoFinalizado"

function PedidoFinalizado(props){

    return (
        <>
        <ContainerFinalizado>
            <div>
                <h1>Parabéns! Pedido Finalizado.</h1>
            </div>
          
            <div>

                <button onClick={()=>props.mudarTela(1)}>Novo Pedido</button>
            </div>
        </ContainerFinalizado>
        
        </>
    )
}

export default PedidoFinalizado