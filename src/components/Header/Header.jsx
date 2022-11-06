import React from "react"
import loginvetor from '../../assets/icons/loginvetor.svg'
import { Cab, Negrito, Login, Anc, Title } from "./style"

export const Header = () => {
    return (
        <Cab>
            <Title><Negrito>astro</Negrito>dev</Title>
            <Login>
                <img src={loginvetor} height={'15px'}/>
                <Anc href="#">Entrar</Anc>
            </Login>
        </Cab>
    )
}