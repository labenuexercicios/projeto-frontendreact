import React from "react";
import { Filter } from "./FilterStyle";


function Filters(){

    return (
        < Filter>
    <h1>Filters</h1>
    <form>
        <p>Valor mínimo:</p>
        <label><input /></label>
<p>Valor máximo:</p>
        <label><input /></label>

<p>Busca por nome:</p>
        <label><input /></label>
    </form>
    </Filter>
    )
}

export default Filters