import { FiltersContainer, PriceMinMax, Search } from "./styles";

export function Filters(props) {
    return (

        <FiltersContainer>
            <Search>
                <input
                    placeholder="Procurar.."
                    value={props.search}
                    onChange={(e) => { props.setSearch(e.target.value) }}
                />
            </Search>
            <PriceMinMax>
                <label for="priceMinMax">Preço: </label>
                <input placeholder="Mínimo"
                    type="number"
                    value={props.minPrice}
                    onChange={(e) => { props.setMinPrice(e.target.value) }}
                />
                <input placeholder="Máximo"
                    type="number"
                    value={props.maxPrice}
                    onChange={(e) => { props.setMaxPrice(e.target.value) }}
                />
            </PriceMinMax>

            <span>
                <label for="order">Ordenar: </label>
                <select
                    value={props.order}
                    onChange={(e) => { props.setOrder(e.target.value) }}
                >
                    <option value={"priceMin"}>Menor Preço</option>
                    <option value={"priceMax"}>Maior Preço</option>
                    <option value={"asc"}>A - Z</option>
                    <option value={"desc"}>Z - A</option>
                </select>
            </span>

        </FiltersContainer>

    )
}