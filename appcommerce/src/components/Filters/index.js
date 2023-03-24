import React from "react";
import { Button, FiltersContainer, Input } from "./styled";

const Filters = ({
  lowestPrice,
  setLowestPrice,
  biggestPrice,
  setBiggestPrice,
}) => {
  return (
    <FiltersContainer>
      <h2>Filtrar</h2>
      <label htmlFor="lowest-price">
        <p>Valor mínimo:</p>
        <Input
          type="number"
          id="lowest-price"
          name="lowest-price"
          value={lowestPrice}
          onChange={(e) => setLowestPrice(e.target.value)}
          min="0"
        />
      </label>
      <label htmlFor="biggest-price">
        <p>Valor máximo:</p>
        <Input
          type="number"
          id="biggest-price"
          name="biggest-price"
          value={biggestPrice}
          onChange={(e) => setBiggestPrice(e.target.value)}
          min="0"
        />
      </label>
      <Button
        onClick={() => {
          setLowestPrice(0);
          setBiggestPrice(10000);
        }}
      >
        Limpar
      </Button>
    </FiltersContainer>
  );
};

export default Filters;