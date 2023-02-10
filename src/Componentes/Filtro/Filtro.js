import React from "react";

function Filtro(props){

    //Pega os valores do onchange
    function maxInput (event){
        props.setVlmax(event.target.value);
    }    

    function minInput(event) {
        props.setVlmin(event.target.value)
        // console.log(props.vlmin)
    }

    function nameInput(event){
        props.setVlnome(event.target.value)
        // console.log(props.vlnome)
    }

    return(
    <ol>
        <h1>Filtros:</h1>
        <b>Valor màximo(R$100.000,00):</b>
        <br></br>
        <input type={"number"} placeholder="Digite o valor máximo" onChange={maxInput}/>
        <br></br>
        <b>Valor mínimo(R$1.000,00):</b>
        <br></br>
        <input type={"number"} placeholder="Digite o valor mínimo" onChange={minInput}/>
        <br></br>
        <b>Buscar por nome:</b>
        <br></br>
        <input type="text" placeholder="Digite o nome do item" onChange={nameInput} />
    </ol>
    )
}

export default Filtro;