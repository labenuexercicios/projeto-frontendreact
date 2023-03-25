import React from "react";
import { ConteinerCar, Carrinho, P, FormContainer, H1, Form, RegisterButton,  } from "./styles"


const SummaryCart = (props) => {

    let allValue = 0

    for (let prod of props.cartItems) {
        const multiProd = prod.price * prod.amount
        allValue = allValue + multiProd
    }


    return (
        <>
            <ConteinerCar>
                <FormContainer >
                    <H1>Resumo do pedido</H1>                  
                            <Form>
                                <Carrinho>
                                    <P>
                                        <p>Valor Total: {props.currencyBrazil(allValue, true)}</p>
                                    </P>
                                </Carrinho>
                                <P>
                                    <RegisterButton onClick={() => props.changePage(8)}>Voltar Carrinho</RegisterButton>
                                    <RegisterButton onClick={() => props.changePage(10)}>Concluir Compra</RegisterButton>
                                </P>
                            </Form>
                    
                </FormContainer>
            </ConteinerCar>
            <p>Valor Total:{allValue}</p>
        </>
    )
}
export default SummaryCart




