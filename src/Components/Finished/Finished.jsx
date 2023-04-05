import React from "react"

import{FormContainer, ConteinerItems,  SendButton} from "./styles"

const Finished = (props)=>{
   
    return (
        <FormContainer>
       <h1>{props.name} sua compra foi finalizada com sucesso!</h1>
       
       <SendButton onClick={() => props.changePage(1)}>Voltar as Compras</SendButton>
       </FormContainer>
    )
}

export default Finished;