
import { FilterBox } from "./filterStyle"
function Filter() {
    return (
        <>

            <FilterBox>
                <h2>Filtro</h2>
                <label>Valor mínimo:
                    <br />
                    <input type="number" />
                </label>

                <br />

                <label>Valor maxímo:
                    <br />
                    <input type="number" />
                </label>

                <br />

                <label>Busca por nome:
                    <br />
                    <input type="text" />
                </label>

            </FilterBox>
        </>
    )
}
export default Filter