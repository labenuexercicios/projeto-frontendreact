import React from "react";
import { Select } from "./styled";

const Ordination = ({ ordination, setOrdination }) => {
  return (
    <Select value={ordination} onChange={(e) => setOrdination(e.target.value)}>
      <option value="">Ordenar por:</option>
      <option value="lowest-price">Menor Preço</option>
      <option value="biggest-price">Maior Preço</option>
      <option value="a-z">A-Z</option>
      <option value="z-a">Z-A</option>
    </Select>
  );
};

export default Ordination;