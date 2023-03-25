import React from "react"

import{FormContainer,  SendButton} from "./styles"

const RegisterUserPage = (props)=>{

   
    return (
        <FormContainer>
       <h1>Você concluiu o cadastro, parabéns!!!</h1>
       <p>Nome:{props.names}</p>
       <p>E-mail:{props.email}</p>
       <p>Endereço:{props.address}</p>
       <p>Número:{props.number}</p>
       <p>Complemento:{props.complement}</p>
       <SendButton onClick={() => props.changePage(1)}>Realizar Login</SendButton>
       </FormContainer>
    )
}

export default RegisterUserPage;