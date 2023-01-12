import { FiltersContainer } from "./style";

function Filters(props) {

    return (
        <FiltersContainer>
            <input
                placeholder="Pesquisa"
                value={props.query}
                onChange={(ev) => { props.setQuery(ev.target.value) }}
            />

            <input
                placeholder="Preço Mínimo"
                type="number"
                value={props.minPrice}
                onChange={(ev) => { props.setMinPrice(ev.target.value) }}
            />
            <input
                placeholder="Preço Máximo"
                type="number"
                value={props.maxPrice}
                onChange={(ev) => { props.setMaxPrice(ev.target.value) }}
            />
            <span>
                <label for="sortingParameter">Ordenar por: </label>
                <select
                    name="sortingParameter"
                    value={props.sortingParameter}
                    onChange={ev => { props.setSortingParameter(ev.target.value) }}
                >
                    <option value={"name"}>Título</option>
                    <option value={"price"}>Preço</option>
                </select>
                <select
                    value={props.order}
                    onChange={ev => { props.setOrder(ev.target.value) }}
                >
                    <option value={"asc"}>Crescente</option>
                    <option value={"desc"}>Decrescente</option>
                </select>
            </span>

        </FiltersContainer>
    );
}

export default Filters;