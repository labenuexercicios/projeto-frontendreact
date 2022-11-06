import React from "react"
import local from '../../assets/icons/local.svg'
import searching from '../../assets/icons/searching.svg'
import { Inf, Localization, Pesquisa, Article, SearchIcon } from "./style"

export const Search = () => {
    return (
        <Inf>
            <Localization>
                <img src={local} height={'15px'}/>
                <p>Planeta Terra, 3</p>
            </Localization>

            <Article>
                <Pesquisa placeholder="Pesquisar"/>
                <SearchIcon><img src={searching}/></SearchIcon>
            </Article>
        </Inf>
    )
}