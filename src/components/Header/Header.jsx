import React from "react"
import loginvetor from '../../assets/icons/loginvetor.svg'
import { Cab, Negrito, Login, Anc } from "./style"

export const Header = () => {
    return (
        <Cab>
            <article><Negrito>astro</Negrito>dev</article>
            <Login>
                <img src={loginvetor} height={'15px'}/>
                <Anc href="#">Entrar</Anc>
            </Login>
        </Cab>
    )
}