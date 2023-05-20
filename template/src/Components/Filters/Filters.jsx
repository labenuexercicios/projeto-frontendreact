import { products } from "../../assets/productList";
import { Filtro } from "./FiltersStyle"

export const Filter = ({minFilter, setMinFilter,maxFilter,setMaxFilter, searchFilter,setSearchFilter})=> {

    const onChangeSearchFilter =(e)=>{setSearchFilter(e.target.value)}
    const onChangeMinFilter =(e)=>{setMinFilter(e.target.value)}
    const onChangeMaxFilter =(e)=>{setMaxFilter(e.target.value)}

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