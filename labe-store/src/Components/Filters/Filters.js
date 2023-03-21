import { DivFilter, InputFilter, Img } from "./filtersStyle";


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

            <Img src="https://i.pinimg.com/736x/19/55/d6/1955d6d5362a4ba9e925ad98ed0a48eb.jpg" width={200}/>

        </DivFilter>
    )
}