import React from "react";
import { ContainerAreaFiltros } from "./styles";


export default function AreaDeFiltros (props){
  
  
    

    const {listaProdutos,valorMinimo, valorMaximo, buscaNome, ordem, ordenacao}= props.estados2
    const {handleValorMinimo, handleValorMaximo, handleBuscaNome, handleOrdem, handleOrdenacao} = props.handles2
    
 

 
    return(
        <ContainerAreaFiltros>
          <h2>Filtros</h2>
          <p>Total de produtos da loja: {listaProdutos.length}</p>
          <br></br>

        
          <p>Valor minimo</p>
          <input type= "number" value={valorMinimo} onChange={handleValorMinimo}></input>
          <p>valor maximo</p>
          <input type= "number" value={valorMaximo} onChange={handleValorMaximo} ></input>
          <p>Nome produto</p>
          <input type= "text" value={buscaNome} onChange={handleBuscaNome}></input>      
          <label > Ordenar por :</label>
          <br></br>
            <select name="Ordencao" value ={ordenacao} onChange={handleOrdenacao}>
              
                <option value="nome">Nome Produto</option>
                <option value = "preço">Preço</option>
                
            </select>
            <br></br>
            <label > Ordenar por preço:</label>
            <select name="ordem de ordenação" value ={ordem} onChange={handleOrdem}>
                <option value="cres">crescente</option>
                <option value="decres">decrescente</option>
               
                
            </select>
            <br/>    
        </ContainerAreaFiltros>
    )
}