import React from "react"
import local from '../../assets/icons/local.svg'
import searching from '../../assets/icons/searching.svg'
import { Inf, Localization, Pesquisa, Article, SearchIcon } from "./style"

export const Search = (props) => {
    
    const handleChange = (e) => {
        props.setSearch(e.target.value)
    }

    return (
        <Inf>
            <Localization>
                <img src={local} height={'15px'}/>
                <p>Planeta Terra, 3</p>
            </Localization>

            <Article>
                <Pesquisa placeholder="Pesquisar" value={props.search} onChange={handleChange}/>
                <SearchIcon><img src={searching}/></SearchIcon>
            </Article>
        </Inf>
    )
}