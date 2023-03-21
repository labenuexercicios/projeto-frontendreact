import { DivFilter, InputFilter } from "./filtersStyle";


export default function Filters(){
    return (
        <DivFilter>
            <h2>Pesquisar</h2>

            <p>Valor mínimo:</p>
            <InputFilter
            type="number"/>

            <p>Valor máximo:</p>
            <InputFilter
            type="number"/>

        </DivFilter>
    )
}