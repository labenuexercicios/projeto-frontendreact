import React from "react"

import{FormContainer,  SendButton} from "./styles"

const RegisterTextMessage = (props)=>{

   
    return (
        <FormContainer>
       <h1>{props.name} sua mensagem foi enviada com sucesso!</h1>       
       <SendButton onClick={() => props.changePage(1)}>Voltar as Compras</SendButton>
       </FormContainer>
    )
}

export default RegisterTextMessage;