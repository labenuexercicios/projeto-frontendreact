import React from "react";
import { Container, Input, Label, Select } from "./Styles";

const Filtros = (props) => {

  const pesquisar = (e) => {
    props.setBuscar(e.target.value);
  };

  const valMinimo = (e) => {
    props.setValorMinimo(e.target.value);
  };

  const valMaximo = (e) => {
    props.setValorMaximo(e.target.value);
  };

  const onChangeOrdenacao = (e) => {
    props.setOrdenacao(e.target.value)
  }

    return (
      <Container>
        <h2>Filtros</h2>
        <Label>Ordenação: 
          <Select value={props.ordenacao} onChange={onChangeOrdenacao}>
           <option value="">Ordenar</option>
           <option value="crescente">Crescente</option>
           <option value="decrescente">Decrescente</option>
          </Select>
        </Label>
        Busca por nome:
        <Input type="text" placeholder="Buscar por nome" onChange={pesquisar} value={props.buscar}/>
        Valor mínimo: 
        <Input type="number" placeholder="Valor mínimo" onChange={valMinimo} value={props.valorMinimo}/>
        Valor máximo:
        <Input type="number" placeholder="Valor máximo" onChange={valMaximo} value={props.valorMaximo}/>
     </Container>
    );
};

export default Filtros;