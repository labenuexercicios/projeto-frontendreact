import React from "react";
import { Div3, H3, Label, Input, Button, Select, Option } from "./styled";

const FilterControler = (props) => {

  return (

    <Div3>
      <H3>Filtro</H3>
      <Label htmlFor="minValue">Valor mínimo:</Label>
      <Input type="number" id="minValue" value={Number(props.minValue)} onChange={(e) => {
        props.handleChangeMinValue(Number(e.target.value))
      }} />
      <Label htmlFor="maxValue">Valor máximo:</Label>
      <Input type="number" id="maxValue" value={Number(props.maxValue)} onChange={(e) => {
        props.handleChangeMaxValue(Number(e.target.value))
      }} />
      <Label htmlFor="buscador">Procurar por nome:</Label>
      <Input type="text" id="buscador" value={props.searchProduct} onChange={(e) => {
        props.handleSearchProduct(e.target.value)
      }} />
      <Label htmlFor="buscador">Procurar por orden:</Label>
      <Select value={props.ordenar} onChange={(e) => 
        props.handleOrdenar(e.target.value)}>
        <Option value="Ordenar">Ordem</Option>
        <Option value="Crescente">Crescente</Option>
        <Option value="Decrescente">Decrescente</Option>
      </Select>


      <Button onClick={() => {
        props.handleReset()
      }}>RESET</Button>

    </Div3>
  )
};


export default FilterControler;