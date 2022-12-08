import React from "react";
import { Container } from "./styles";


  const Filtro = (props) => {

    const handleSearchMin = (e) =>{
      props.setMin(e.target.value)
      }
      const handleSearchMax = (e) =>{
      props.setMax(e.target.value)
      }
const handleSearch = (e) =>{
props.setPesquisa(e.target.value)
}
const handleSearchOrdem = (e) =>{
props.setOrdem(e.target.value)
}
return(

<Container>
<input
        type="text"
        placeholder="Buscar por nome"
        onChange={handleSearch}
        value={props.pesquisa}
      />

      <select onChange={handleSearchOrdem}>
        <option value="">Ordenar</option>
        <option value="Crescente">Crescente</option>
        <option value="Decrescente">Decrescente</option>
      </select>
      <input
        type="number"
        placeholder="Buscar por Valor Minimo"
        onChange={handleSearchMin}
        value={props.min}
      />
      
      <input
      type="number"
      placeholder="Buscar por valor maximo"
      onChange={handleSearchMax}
      value={props.max}
    />

</Container>



);


};

export default Filtro