import {ContainerFinalizado} from "./Style"

const FinalDaCompra = (props) => {

    return (
        <>
        <ContainerFinalizado>
            <div>
                <h1>Pedido Finalizado</h1>
            </div>
            <div>
            </div>
            <div>
                <button
                 onClick={()=>props.mudarTela(1)}>Fazer novo pedido</button>
            </div>
        </ContainerFinalizado>
        
        </>
    )
}

export default FinalDaCompra