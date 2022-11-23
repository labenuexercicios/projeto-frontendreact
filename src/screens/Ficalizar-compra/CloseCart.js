import { useState } from "react"
import AdressForm from "../../components/AdressForm/adressForm"
import { ConteinerCloseCart } from "./CloseCart.styled"

function CloseCart(props) {
    const {user}= props
    const [pageFlow, setPageFlow] = useState(0)




    return (
        <ConteinerCloseCart>
            <div className="header-close-order">
                <h1>Logo</h1>
                <h1>Finalizar a Compra (1)Item</h1>


            </div>


            <div className="main-close-order">
                <div>

                    <h1>main-close-order</h1>

                    <div className="steps-slidedown">
                        <h1>steps-slidedown</h1>

                       
{pageFlow===0?<AdressForm user={user}/>:

                        <div className="adress">
                            <h1>1 adress</h1>
                            <div className="adress-write">
                                <p>Rua X-tudo L Bacon</p><span>270</span>
                                <p>Apto 104</p><span>Luxemburgo</span>
                                <p>Belo Horizonte</p><span>MG</span>
                                <p>30380-530</p>
                            </div>
                            <span>Alterar</span>
                        </div>
}
                        <div className="payment">
                            <h1>2 Metodo de Pagamento</h1>
                            <div className="adress-write">
                                <div><span><img src="https://picsum.photos/30/20" alt="" />Visa(Crédito)</span><span>termina em 9999</span></div>
                                <select>
                                    <option>1x de </option>
                                    <option>2x de </option>
                                    <option>3x de </option>
                                    <option>4x de </option>
                                    <option>5x de </option>
                                </select>
                                <label>Codigo Promocional</label>
                                <input placeholder="Insira o codigo"/>
                                <button>Cadastrar</button>
                            </div>
                            <span>Alterar</span>


                        </div>
                        <div className="itens-review">
                            <h1>itens-review</h1>
                            <p> data de entrega: 23/11/2022</p>
                            <div>

                            <img src="https://picsum.photos/80/80" alt="" />
                            <p>Titulo do produto</p>

                            </div>
                        </div>

                    </div>
                </div>
                <div className="side-resume">
                    <button>Enviar para este endereço</button>
                   <p>continue para metodo de pagamento</p>
                   <hr/>
                   <h1>Reumo do pedido</h1>
                   <div>
                    <p><span>Itens:</span> <span>300</span></p>
                    <p><span>Frete:</span> <span>0</span></p>
                   </div>
                   <h2><span>Total do Pedido:</span><span>300</span></h2>


                </div>
            </div>


        </ConteinerCloseCart>
    )

}
export default CloseCart