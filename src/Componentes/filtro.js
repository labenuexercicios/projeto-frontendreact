import React, { useState }  from 'react';
import {ContainerFiltro} from "./filtro.styled"



export function Filtros(props) {
    
    const onChangeFiltrarNome = (e) => {
      setFilterNome(e.target.value);
    }

    const onChangevalorMax = (e) => {
      setFilterMax(e.target.value);
    }

    const onChangevalorMin = (e) => {
      setFilterMin(e.target.value);
    }

const [filterNome, setFilterNome] = useState("")
const [filterMin, setFilterMin] = useState(-Infinity)
const [filterMax, setFilterMax] = useState(+Infinity)

const onClickBotao = () =>{
props.setFiltrarNome(filterNome)
props.setValorMin(filterMin)
props.setValorMax(filterMax)
}

function resetFiltro(){
  window.location.reload(true)
  }
  

    return (
    <ContainerFiltro>
    
    <h2>Filtros:</h2>
    
    <p>Valor mínimo:</p><p><input  onChange={onChangevalorMin} type="Number" placeholder="Insira um valor" 
    value={filterMin}/></p>

    <p>Valor máximo:</p><p><input onChange={onChangevalorMax} type="Number" placeholder="Insira um valor" 
    value={filterMax}/></p>

    <p>Buscar por nome:</p><p><input onChange={onChangeFiltrarNome} type="text"  placeholder="Insira um nome" 
    value={filterNome}/></p>

    <button onClick={onClickBotao}><em>Buscar</em></button>
    <p><button onClick={resetFiltro}>Limpar Filtro</button></p>


    </ContainerFiltro>
    );
  }