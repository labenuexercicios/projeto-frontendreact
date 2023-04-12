import React from "react";
import { FilterContainer } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Filter(props) {
  return (
    <FilterContainer>
        <h2>Filtro:</h2>
        <label>Valor mínimo</label>
        <input
          type="number"
          id="min"
          value={props.minFilter}
          onChange={props.onChangeMinFilter}
        ></input>
        <label>Valor máximo</label>
        <input
          type="number"
          id="max"
          value={props.maxFilter}
          onChange={props.onChangeMaxFilter}
        ></input>
        <h2>Categorias:</h2>
        <button
          className={props.catFilter === "suits" ? "selected" : null}
          value="suits"
          onClick={props.onClickCatFilter}
        >
          <FontAwesomeIcon icon="fa-solid fa-rocket" /> Traje espacial
        </button>
        <button
          className={props.catFilter === "ships" ? "selected" : null}
          value="ships"
          onClick={props.onClickCatFilter}
        >
          <FontAwesomeIcon icon="fa-solid fa-rocket" /> Nave espacial
        </button>
        <button
          className={props.catFilter === "phasers" ? "selected" : null}
          value="phasers"
          onClick={props.onClickCatFilter}
        >
          <FontAwesomeIcon icon="fa-solid fa-rocket" /> Phasers e Blasters
        </button>
        <button
          className={props.catFilter === "preowned" ? "selected" : null}
          value="preowned"
          onClick={props.onClickCatFilter}
        >
          <FontAwesomeIcon icon="fa-solid fa-rocket" /> Semi-novos
        </button>
        <hr />
        <button
          className="filterBtn"
          onClick={props.onClickFilterData}
        >
          Filtrar Resultados >>
        </button>
        <button
          className="filterBtn"
          onClick={props.onClickClearFilter}
        >
          Limpar Filtros
        </button>
    </FilterContainer>
  );
}
