import React from "react";
import { useState } from "react";
import { Select } from "../style";


export default function Ordenado(props) {

  return (
    <Select>
    
      <select 
      value={props.parametro}
      onChange={ev=>{props.setParametro(ev.target.value)}}>
        <option value={"none"}>None</option>
        <option value={"priceAsc"}>Price: Low</option>
        <option value={"priceDesc"}>Price: High</option>
        <option value={"AaZ"}>Alphabetically</option>
      </select>

    </Select>
  );
}