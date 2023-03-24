import {ContainerFinalizado, StatusPedido} from "./stylePedidoFeito"

const PedidoFinalizado = (props) => {

    return (
        <>``
        <ContainerFinalizado>
            <div>
                <h1>Parabéns! Você adiquiriu uma peça unica!.</h1>
                <h3>Pedido #00000.00000</h3>
            </div>
            <div>
                <div>
                      <h2>Seu pedido jájá chega!.</h2>      
                </div>
 
            </div>
            <div>

                <button onClick={()=>props.mudarTela(1)}>Novo Pedido</button>
            </div>
        </ContainerFinalizado>
        
        </>
    )
}

export default PedidoFinalizado