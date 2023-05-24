import { FiltroCaixa } from "./filersStyle";

export function Filters() {
  return (
    <FiltroCaixa>
      <h2>Filtro</h2>
      <label>
        <br />
        Valor minimo:
        <br />
        <input type="number" />
      </label>
      <label>
        <br />
        Valor maximo:
        <br />
        <input type="number" />
      </label>
      <label>
        <br />
        Buscar por nome:
        <br />
        <input type="text" />
      </label>
    </FiltroCaixa>
  );
}
