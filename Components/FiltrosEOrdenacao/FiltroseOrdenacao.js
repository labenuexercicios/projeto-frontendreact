import StyledFiltro from "./FiltroStyled";
import { useState } from "react";
import productList from "../../ProductList";

const Filters = (props) => {
  const handleInputMinFilter = (e) => {
    props.setMinFilter(e.target.value);
  };

  const handleInputMaxFilter = (e) => {
    props.setMaxFilter(e.target.value);
  };

  const handleInputSearchFilter = (e) => {
    props.setSearchFilter(e.target.value);
  };

  return (

    <StyledFiltro>
      <input
        name="pesquisa"
        className="busca"
        placeholder="Aqui você encontra tudo :)"
        value={props.pesquisa}
        onChange={handleInputSearchFilter}
      />
      <input
        name="precoMinimo"
        className="valor"
        placeholder="Preço Mínimo $"
        type="number"
        min={0}
        onChange={handleInputMinFilter}
        value={props.minFilter}
      />
      <input
        name="precoMaximo"
        className="valor"
        placeholder="Preço Máximo $$$"
        type={"number"}
        min={0}
        onChange={handleInputMaxFilter}
        value={props.maxFilter}
      />
    </StyledFiltro>
  );
};

export default Filters;
