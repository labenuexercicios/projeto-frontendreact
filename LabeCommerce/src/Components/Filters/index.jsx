import React from "react";
import { FiltroLabel, TituloPagina,FiltroInput, Container } from "./style";



export default function Filter() {
  return (
    <Container>
      <TituloPagina>Filter</TituloPagina>
      
      <FiltroLabel htmlFor="textMin">Valor mínimo:</FiltroLabel>
      <FiltroInput type="number" id="textMin" name="textMin" />

      <FiltroLabel htmlFor="textMax">Valor máximo:</FiltroLabel>
      <FiltroInput type="number" id="textMax" name="textMax" />

      <FiltroLabel htmlFor="textNome">Busca por Nome:</FiltroLabel>
      <FiltroInput type="text" id="textNome" name="textNome" />
      
    </Container>
  );
}
