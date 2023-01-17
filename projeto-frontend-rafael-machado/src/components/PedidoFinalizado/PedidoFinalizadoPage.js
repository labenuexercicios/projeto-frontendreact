import {Container} from "./stylePedidoFinalizado"

const PedidoFinalizadoPage = ({mudarTela}) => {
    return (
        <>

        <Container>
            <div>
                <h1>Pedido Feito com sucesso!</h1>
                
            </div>
            <div>
                <div>
                      <h2>Seu pedido está a caminho!</h2>      
                </div>
 
            </div>
            <div>

                <button onClick={()=>mudarTela(1)}>Continue comprando</button>
            </div>
        </Container>
       
        </>
    )

}

export default PedidoFinalizadoPage