import { Filtro } from "./FiltersStyle"

export const Filter = ({minFilter, onChangeMinFilter,maxFilter, onChangeMaxFilter, searchFilter,onChangeSearchFilter})=> {
    
    return(
        <Filtro>
        <h2>Filtro</h2>
        <label> Valor mínimo:
            <input value={minFilter} onChange={onChangeMinFilter}/>
        </label>
        <label> Valor máximo:
            <input value={maxFilter} onChange={onChangeMaxFilter}/>
        </label>
        <label> Buscar por nome:
            <input value={searchFilter} onChange={onChangeSearchFilter}/>
        </label>
    </Filtro>
    )
}