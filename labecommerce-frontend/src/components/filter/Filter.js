import { InputContainer } from "./styles"

const Filter = ({ order, setOrder, setValueMin, setValueMax, setSearchName }) => {
    return (

        <div>
            <p>Filtro</p>

            <select value={order} onChange={(e) => setOrder(e.target.value)}>
                <option value="crescente">Crescente</option>
                <option value="decrescente">Decrescente</option>
            </select>

            <InputContainer>
                <input
                    placeholder="Valor mínimo:"
                    type="number"
                    onChange={(e) => setValueMin(e.target.value)} />
                <input
                    placeholder="Valor máximo:"
                    type="number"
                    onChange={(e) => setValueMax(e.target.value)} />
                <input
                    placeholder="Buscar por nome:"
                    type="text"
                    onChange={(e) => setSearchName(e.target.value)} />
            </InputContainer>
            
        </div>
    )
}

export default Filter