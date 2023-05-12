import { Filtro } from "./FiltersStyle"

export const Filter = ()=> {
    return(
        <Filtro>
        <h2>Filtro</h2>
        <label> Valor mínimo:
            <input></input>
        </label>
        <label> Valor máximo:
            <input></input>
        </label>
        <label> Buscar por nome:
            <input></input>
        </label>
    </Filtro>
    )
}