
import App from "../../App";
import { FiltroCaixa } from "./FilterStyle";

function Filters() {
  return (
    <FiltroCaixa>
      <h2>Filtros</h2>
      <label>Valor Mínimo: <br/><input type="number" /> </label>
      <label>Valor Máximo: <br/><input type="number" /> </label>
      <label>Busca por Nome<br/><input type="text" /> </label>
    </FiltroCaixa>
  );
}

export default Filters;
