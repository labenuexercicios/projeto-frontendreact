import React from "react"
import local from '../../assets/icons/local.svg'
import { Inf, Localization, Pesquisa } from "./style"

export const Search = () => {
    return (
        <Inf>
            <Localization>
                <img src={local} height={'15px'}/>
                <p>Planeta Terra, 3</p>
            </Localization>

            <Pesquisa placeholder="Pesquisar"/>

        </Inf>
    )
}