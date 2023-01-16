import { StyledFilter } from "./style";

const Filters = ({ valueMin, valueMax, setValueMin, setValueMax }) => {
  return (
    <StyledFilter>
      <h3>Ordenar por:</h3>

      <label>Valor Minimo:</label>
      <input
        type={"text"}
        value={valueMin}
        onChange={(e) => setValueMin(e.target.value)}
      />

      <label>Valor Maximo:</label>
      <input
        type={"text"}
        value={valueMax}
        onChange={(e) => setValueMax(e.target.value)}
      />
    </StyledFilter>
  );
};

export default Filters;
