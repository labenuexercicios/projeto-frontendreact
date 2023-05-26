
import App from "../../App";
import { FiltroCaixa } from "./FilterStyle";

function Filters({
  minFilter,
  setMinFilter,
  maxFilter,
  setMaxFilter,
  searchFilter,
  setSearchFilter,
}) {

  function handleMinFilter(event){
   
    if(event.target.value < 0){
      alert("Não temos nada gratis")
      setMinFilter(0)     
      
    }else{setMinFilter(event.target.value)}
    
    //event: o que acontece, target: onde acontece, value: valor do que acontece
  }

  function handleMaxFilter(event){
    if(event.target.value < 0){
      alert("Não temos nada gratis")
      setMaxFilter(0)     
      
    }else{setMaxFilter(event.target.value)}
  }

  function handleSearchFilter(event){
    setSearchFilter(event.target.value)
  }
  // console.log('no filter',minFilter,
  // setMinFilter,
  // maxFilter,
  // setMaxFilter,
  // searchFilter,
  // setSearchFilter )



  return (
    <FiltroCaixa>
      <h2>Filtros</h2>
      <label>
        Valor Mínimo: 
        <br/>
        <input 
        type="number" 
        value={minFilter} 
        onChange={handleMinFilter}
        /> 
      </label>
      <label>
        Valor Máximo: 
        <br/>
        <input 
        type="number" 
        value={maxFilter} 
        onChange={handleMaxFilter} 
        /> 
      </label>
      <label>Busca por Nome
        <br/>
        <input 
        type="text" 
        value={searchFilter} 
        onChange={handleSearchFilter} 
        /> 
      </label>
    </FiltroCaixa>
  );
}

export default Filters;
