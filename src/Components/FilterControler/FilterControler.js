import React, { useState } from "react";
import { Div, H3, Label, Input, Button } from "./styled";

const FilterControler = (props) => {
  //LOS ESTADOS
  /*  const [minValue, setMinValue] = useState(0)
    const [maxValue, setMaxValue] = useState(1000)
    const [searchName, setSearchName] = useState("")*/


  return (

    <Div>
      <H3>Filtro</H3>
      <Label htmlFor="minValue">Valor minimo:</Label>
      <Input type="number" id="minValue" value={props.minValue} onChange={(e) => {
        //setMinValue(e.target.value)
        //aqui iniciamos invocando las funciones
        props.handleChangeMinValue(e.target.value)
      }} />
      <Label htmlFor="maxValue">Valor maximo:</Label>
      <Input type="number" id="maxValue" value={props.maxValue} onChange={(e) => {
        //setMaxValue(e.target.value)
        props.handleChangeMaxValue(e.target.value)
      }} />
      <Label htmlFor="buscador">Buscar por nome:</Label>
      <Input type="text" id="buscador" value={props.searchProduct} onChange={(e) => {
        //setSearchName(e.target.value)
        props.handleSearchProduct(e.target.value)
      }} />

      <Button onClick={() => {
        props.handleReset()
        /*      setMinValue(0)
                setMaxValue(1000)
                setSearchName("")*/
      }}>RESET</Button>

    </Div>
  )
};

//handle lo utilizamos como nombre caracteriztico para darle una funcion a mi input o a botones
export default FilterControler;