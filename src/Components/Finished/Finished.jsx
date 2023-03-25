import React from "react"

import{FormContainer, ConteinerItems,  SendButton} from "./styles"

const Finished = (props)=>{
   
    return (
        <FormContainer>
       <h1>{props.name} sua compra foi finalizada com sucesso!</h1>
       <p>contendo os seguintes produtos:</p>
       {props.cartItems.map((item)=>{
        return (
        <ConteinerItems key={item.id}>
        <img src={item.image} width={35} />
        <p>{`${item.title}-`}</p>        
        <p>Quantidade: {item.amount}</p>
        </ConteinerItems>)
       })}       
       <SendButton onClick={() => props.changePage(1)}>Voltar as Compras</SendButton>
       </FormContainer>
    )
}

export default Finished;