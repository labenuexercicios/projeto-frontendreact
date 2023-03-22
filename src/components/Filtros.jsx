import React, { useState } from "react";
import { useContext } from "react";
import "./Filtros.css";
import { ProdutosContext, TODOS_PRODUTOS } from "../assets/produtos";

export default function Filtros() {
  const { produtosFiltrados, setProdutosFiltrados } =
    React.useContext(ProdutosContext);

  const [ filterMin, setFilterMin ] = useState(0);
  const [ filterMax, setFilterMax ] = useState(10000000);
  const [ filterName, setFilterName ] = useState("");
  return (
    <div className="filtros">
      <h1>Filtros</h1>
      <div className="filterGroup">
        Filtro Mínimo:
        <input type="number" onChange={(e)=>{setFilterMin(e.target.value)}} />
      </div>
      <div className="filterGroup">
        Filtro Máximo:
        <input type="number" onChange={(e)=>{setFilterMax(e.target.value)}}/>
      </div>
      <div className="filterGroup">
        Buscar por nome:
        <input type="text" onChange={(e)=>{setFilterName(e.target.value)}}/>
      </div>
    

      <button
        onClick={() =>
          setProdutosFiltrados(
            TODOS_PRODUTOS.filter((e) => {
              return e.value >= filterMin && e.value <= filterMax && e.name.includes(filterName);
            })
          )
        }
      >
        Ativar filtros
      </button>
    </div>
  );
}
