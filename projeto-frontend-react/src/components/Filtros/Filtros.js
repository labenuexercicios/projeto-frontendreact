import { FiltrosContainer } from "./FiltrosStyle"

export function Filtros() {
  return (
    <FiltrosContainer>
      <h2>Filtros</h2>
      <h3> Faixa de preço</h3>
      <label>Valor mínimo</label>
      <input placeholder="R$ 0,00" />
      <label>Valor máximo</label>
      <input placeholder="R$ 500,00" />
      <h3> Tipo de produto</h3>
      <select>
        <option>Tipo de produto</option>
        <option>Pulseira</option>
        <option>Brinco</option>
        <option>Colar</option>
        <option>Anel</option>
        <option>Pingente</option>
        <option>Relógio</option>
        <option>Aliança</option>
      </select>
      <h3> Material</h3>
      <select>
        <option>Material</option>
        <option>Ouro Amarelo</option>
        <option>Ouro Rosé</option>
        <option>Ouro Branco</option>
        <option>Prata</option>
        <option>Pedras</option>
        <option>Ródio Negro</option>
      </select>
      <button>Filtrar</button>
      <button>Limpar filtro</button>
    </FiltrosContainer>
  );
}
