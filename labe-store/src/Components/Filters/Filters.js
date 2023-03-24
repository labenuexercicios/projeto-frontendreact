import { DivFilter, InputFilter, Img } from "./filtersStyle";


export default function Filters({minValue, setMinValue, maxValue, setMaxValue}){

    

    return (
        <DivFilter>
            <h2>Pesquisar</h2>

            <p>Valor mínimo:</p>
            <InputFilter
            type="number"
            min="0"
            value={minValue}
            onChange={(e) => setMinValue(e.target.value)}/>

            <p>Valor máximo:</p>
            <InputFilter
            type="number"
            min="100"
            value={maxValue}
            onChange={(e) => setMaxValue(e.target.value)}/>


        </DivFilter>
    )
}