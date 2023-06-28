import React from "react";

import { FiltroLabel, TituloPagina, FiltroInput, Container } from "./style.jsx";

export default function Filter(props) {
  const {
    minFilter,
    setMinFilter,
    maxFilter,
    setMaxFilter,
    searchFilter,
    setSearchFilter,
  } = props;

  return (
    <Container>
      <TituloPagina>Filter</TituloPagina>

      <FiltroLabel htmlFor="textMin">Valor mínimo:</FiltroLabel>
      <FiltroInput
        defaultvalue={minFilter}
        onChange={
          minFilter >= 0 ? (e) => setMinFilter(e.target.value) : setMinFilter(0)
        }
        type="number"
        id="textMin"
        name="textMin"
      />

      <FiltroLabel htmlFor="textMax">Valor máximo:</FiltroLabel>
      <FiltroInput
        defaultvalue={maxFilter}
        onChange={
          maxFilter >= 0 ? (e) => setMaxFilter(e.target.value) : setMaxFilter(0)
        }
        type="number"
        id="textMax"
        name="textMax"
      />

      <FiltroLabel htmlFor="textNome">Busca por Nome:</FiltroLabel>
      <FiltroInput
        defaultvalue={searchFilter}
        onChange={(e) => setSearchFilter(e.target.value)}
        type="text"
        id="textNome"
        name="textNome"
      />
    </Container>
  );
}
