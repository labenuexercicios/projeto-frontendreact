import React from "react";
import { FiltroContainer } from "./style";

export default function Filtro({filtroOrdenado,setFiltroOrdenado,valorMinimo,setValorMinimo,
valorMaximo,setValorMaximo,}) {

  const onChangeFiltroOrdenado  = (e)=>{
    setFiltroOrdenado(e.target.value)
    console.log(filtroOrdenado)
  }

    const onChangeValorMinimo  = (e)=>{
      setValorMinimo(e.target.value)
      console.log(valorMinimo)
    }

    const onChangeValorMaximo =(e) =>{
      setValorMaximo(e.target.value)
      console.log(valorMaximo)
    }





  



  return (
    <FiltroContainer>
      

      <div className="inputBloco">
        
        <select className="SelectPesquisa" onChange={(e)=>onChangeFiltroOrdenado(e)}>
          
          <option className="BarraPesquisa" value="ordenado"   >

            Ordenado
            
          </option>

          <option className="BarraPesquisa" value="crescente" >
            Crescente
          </option>

          <option className="BarraPesquisa" value="decrescente" >
            Decrescente

          </option>
          
        </select>

        <div className="inputzinho">
          <input placeholder="Valor Minímo" type ="number" onChange={ (e) => {onChangeValorMinimo (e) } }></input>
          <input placeholder="Valor Máximo" type = "number" onChange={ (e) => {onChangeValorMaximo (e) } }></input>
          </div>
      </div>
    </FiltroContainer>
  );


  
}

