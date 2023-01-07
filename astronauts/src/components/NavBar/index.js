import React from "react"
import { NavBarContainer, NavLink, Menu, Filters } from "./styled"

export function NavBar({setType, setOrder}){
    const handleOrder=(event) =>{
        setOrder(event.target.value)
    }
    const handleTypeSearch = (event) =>{
        setType(event.target.value)

    }
    return(
        <NavBarContainer>
            <Menu>
                <NavLink>Novidades</NavLink>
                <NavLink>Trajes</NavLink>
                <NavLink>Acessórios</NavLink>
                <Filters>
                    <option value="" onClick={handleOrder}>Filtrar</option>
                    <option value="asc" onClick={handleOrder}>Menor preço</option>
                    <option value="desc" onClick={handleOrder}>Maior preço</option>
                </Filters>
                <Filters>
                    <option value="" onClick={handleTypeSearch}>Selecione por tipo:</option>
                    <option value="traje com capacete" onClick={handleTypeSearch}>Trajes completos</option>
                    <option value="sem capacete" onClick={handleTypeSearch}>Trajes sem capacetes</option>
                    <option value="helmet" onClick={handleTypeSearch}>Capacetes</option>
                    <option value="acessorio" onClick={handleTypeSearch}>Acessórios</option>
                </Filters>
            </Menu>
        </NavBarContainer>
    )
}