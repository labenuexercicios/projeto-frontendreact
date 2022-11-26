import React  from 'react';
import {ContainerFiltro} from "./filtro.styled"



export function Filtros(props) {
    
    const onChangeFiltrarNome = (e) => {
      props.setFiltrarNome(e.target.value);
    }

    const onChangevalorMax = (e) => {
      props.setValorMax(e.target.value);
    }

    const onChangevalorMin = (e) => {
      props.setValorMin(e.target.value);
    }

    return (
    <ContainerFiltro>
    
    <h2>Filtros:</h2>
    <p>Valor mínimo:</p><p><input  onChange={onChangevalorMin} type="Number" placeholder="Insira um valor" 
    value={props.valorMin}/></p>

    <p>Valor máximo:</p><p><input onChange={onChangevalorMax} type="Number" placeholder="Insira um valor" 
    value={props.valorMax}/></p>

    
    <p>Buscar por nome:</p><p><input onChange={onChangeFiltrarNome} type="text"  placeholder="Insira um nome" 
    value={props.filtrarNome}/></p>
    
    </ContainerFiltro>
    );
  }