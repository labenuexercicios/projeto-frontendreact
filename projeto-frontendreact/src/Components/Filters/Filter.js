import { Input, FilterStyle } from "./FilterStyle"

export default function Filter(props) {





    return (
        <FilterStyle>
            <h1>Filtro</h1>
            <p>Valor mínimo:</p>
            <Input
                value={props.minFilter}
                onChange={(e) => props.setMinFilter(e.target.value)}
            />
            <p>Valor máximo:</p>
            <Input
                value={props.maxFilter}
                onChange={(e) => props.setMaxFilter(e.target.value)}
            />
            <p>Busca por nome:</p>
            <Input
                value={props.searchFilter}
                onChange={(e) => props.setSearchFilter(e.target.value)}
            />
        </FilterStyle>
    )

}