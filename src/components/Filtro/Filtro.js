import { FiltroContainer } from "./FiltroStyles"

function Filtro() {
    return (
        <FiltroContainer>
            <p>Filtro</p>
            <label>valor mínimo</label>
            <input type="text"></input>

            <label>valor máximo</label>
            <input type="text"></input>

            <label>buscar por nome</label>
            <input type="text"></input>
        </FiltroContainer>
    )
}

export default Filtro