import React from "react"

import{FormContainer,  SendButton} from "./styles"

const RegisterUserPage = (props)=>{

   
    return (
        <FormContainer>
       <h1>Você concluiu o cadastro, parabéns!!!</h1>
       <SendButton onClick={() => props.changePage(1)}>Realizar Login</SendButton>
       </FormContainer>
    )
}

export default RegisterUserPage;