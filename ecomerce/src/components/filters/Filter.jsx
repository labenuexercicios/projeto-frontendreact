
import { FilterBox } from "./filterStyle"
function Filter({
    minFilter,
    setMinFilter,
    maxFilter,
    setMaxFilter,
    searchFilter,
    setSearchFilter,
}) {

    function handMinFilter(event) {
        if (event.target.value < 0) {
            alert("Valor fiado não rola!")
            setMinFilter(0)
        } else {

            setMinFilter(event.target.value)
        }
    }

    function handMaxFilter(event) {
        if (event.target.value < 0) {
            alert("Valor fiado não rola!")
            setMaxFilter(0)
        } else {

            setMaxFilter(event.target.value)
        }

    }

    function handSearchFilter(event) {
        setSearchFilter(event.target.value)
    }

    return (
        <>

            <FilterBox>
                <h2>Filtro</h2>
                <label>Valor mínimo:
                    <br />
                    <input type="number" value={minFilter}
                        onChange={handMinFilter} />
                </label>

                <br />

                <label>Valor maxímo:
                    <br />
                    <input type="number" value={maxFilter}
                        onChange={handMaxFilter} />
                </label>

                <br />

                <label>Busca por nome:
                    <br />
                    <input type="text" value={searchFilter}
                        onChange={handSearchFilter} />
                </label>

            </FilterBox>
        </>
    )
}
export default Filter