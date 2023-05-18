import React, { useState } from "react";
import { FiltroContainer, Form } from "./styled"


function Filters ({handleValorMin, handleValorMax}) {

    const [name, setName] = useState("")
    const handleInputName = (event) => setName(event.target.value)
  
    return (
        <FiltroContainer>
            <Form>
                <h1>Filtros</h1>
                <br></br>
                <label htmlFor="number">Valor mínimo:</label>
                <input 
                /* value={valorMin} */
                type="number"
                id="number"
                onChange={handleValorMin}/>
                <br></br>
                <label htmlFor="number">Valor máximo:</label>
                <input 
                /* value={valorMax} */
                type="number"
                id="number"
                onChange={handleValorMax}/>
                <br></br>
                <label htmlFor="name">Busca por nome:</label>
                <input 
                /* value={name} */
                type="text" 
                id="name"
                placeholder="Buscar por nome"
                onChange={handleInputName} />
            </Form> 
        </FiltroContainer>   
    )   
}

export default Filters