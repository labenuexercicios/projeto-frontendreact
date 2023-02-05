import { FiltrosContainer } from "./style"

export function Filtros(props) {

    function handleFiltroMin(e) {
        props.setFiltroMin(e.target.value)
    }

    function handleFiltroMax(e) {
        props.setFiltroMax(e.target.value)
    }

    function handleBusca(e) {
        props.setFiltroBusca(e.target.value)
    }

    return (
        <FiltrosContainer>
            <h2>Filtros</h2>
            <label>Valor Mínimo</label>
            <input
                type="number"
                min="0"
                onChange={handleFiltroMin}
                value={props.filtroMin}
            />

            <label>Valor Máximo</label>
            <input
                type="number"
                min="0"
                onChange={handleFiltroMax}
                value={props.filtroMax} />

            <label>Busca por Nome</label>
            <input
                type="text"
                onChange={handleBusca}
                value={props.filtroBusca} />
        </FiltrosContainer>
    )
}