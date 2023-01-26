import React from "react";


export function Filtro(props){

  function maxInput (event){
    props.setVlmax(event.target.value)

  }

  function chamaclickmax(){
    if(props.vlmax <= 1000){
      props.setFiltomaxteste(1)
    }
    else{
      alert("O valor que voce digito é maior doque 1000.")
      // props.setVlmax(0)
      // console(props.vlmax)
    }
  }

  function minInput(event) {
    props.setVlmin(event.target.value)

  }

  function chamaclickmin(){
    if(props.vlmin >= 100){
      props.setFiltominteste(1)
    }
    else{
      alert("O valor que voce digito é menor doque 100.")
    }
  }


  function vlNome(){

  }

    return(
        <ol>
        <h1>Filtros:</h1>
        <b>Valor màximo(1000w):</b>
        <br></br>
        <input type={"number"} placeholder="Digite o valor máximo" onChange={maxInput}  />
        <button onClick={chamaclickmax}>Filtrar</button>
        <br></br>
        <b>Valor mínimo(100w):</b>
        <br></br>
        <input type={"number"} placeholder="Digite o valor mínimo" onChange={minInput}/>
        <button onClick={chamaclickmin} >Filtrar</button>
        <br></br>
        <b>Buscar por nome:</b>
        <br></br>
        <input type="text" placeholder="Digite o nome" id="campoDeBusca" />
        <button onChange={vlNome} >Filtrar</button>
      </ol>
    )

}