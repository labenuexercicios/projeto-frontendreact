import { Input, FilterStyle } from "./FilterStyle"

export default function Filter() {
    return(
        <FilterStyle>
        <h1>Filtro</h1>
        <p>Valor mínimo:</p>
        <Input></Input>
        <p>Valor máximo:</p>
        <Input></Input>
        <p>Busca por nome:</p>
        <Input></Input>
        </FilterStyle>
    )

}