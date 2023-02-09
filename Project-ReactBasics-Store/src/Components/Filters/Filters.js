import { DivLabel } from "./FiltersStyle"


const Filters = () => {



    return (
        <div>
            <h1>Filters</h1>
            <div>
                <DivLabel>
                <div><label >Valor mínimo:</label></div>
                <div><input type = "number" /></div>
                </DivLabel>
            </div>
            <div>
                <DivLabel>
                <div><label>Valor máximo:</label></div>
                <div><input type = "number" /></div>
                </DivLabel>
            </div>
            <div>
                <DivLabel>
                <div><label>Busca por nome:</label></div>
                <div><input type = "text" /></div>
                </DivLabel>
            </div>
        </div>
    )
}

export default Filters