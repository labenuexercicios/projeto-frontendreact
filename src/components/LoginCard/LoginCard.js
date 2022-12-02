import React from "react";
import {CardCamiseta} from "./LoginCard.styled";
import {useForm} from '../../hook/useForm'


export function LoginCard (){

    const [form, onChangeForm] = useForm({email: "", senha: ""})

    const handleClick = (event) => {
        event.preventDefault()
    }

    return(
        <>
            <CardCamiseta >
        
                    <h3>Login do Usuário</h3>
           
            </CardCamiseta>
        </>
)   
}