import { Button } from "../ProductList/ProductCard/ProductCardStyle"
import { Input, FilterStyle } from "./FilterStyle"

export default function Filter(props) {

    const onChangeMinFilter =(event)=>{
        if(props.minFilter < 0){
            props.setMinFilter(0)
        }else{
            props.setMinFilter(event.target.value)
        }
    }

    const onChangeMaxFilter =(event)=>{
        if(props.maxFilter < 0){
            props.setMaxFilter(0)
        }else{
            props.setMaxFilter(event.target.value)
        }
    }

    const onChangeSearchFilter =(event)=>{
        if(props.searchFilter < 0){
            props.setSearchFilter(0)
        }else{
            props.setSearchFilter(event.target.value)
        }
    }

    return(
        <FilterStyle>
        <h1>Filtro</h1>
        <p>Valor mínimo:</p>
        <Input
        value={props.minFilter}
        onChange={onChangeMinFilter}
        />
        <p>Valor máximo:</p>
        <Input
        value={props.maxFilter}
        onChange={onChangeMaxFilter}
        />
        <p>Busca por nome:</p>
        <Input
        value={props.searchFilter}
        onChange={onChangeSearchFilter}
        />
        <Button>Filtrar</Button>
        </FilterStyle>
    )

}