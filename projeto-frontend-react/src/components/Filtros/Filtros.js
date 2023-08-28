import { FiltrosContainer } from "./FiltrosStyle";

export function Filtros(props) {
  console.log(
    props.minFilter,
    props.maxFilter,
    props.searchFilter,
    props.searchFilterMaterial
  );

  const alterarMinFilter = (e) => {
    props.setMinFilter(e.target.value);
    if (props.minFilter > 0) {
      props.setMinFilter(props.MinFilter);
    } else {
      alert("Digite um valor acima de R$ 0,00");
    }
  };

  return (
    <FiltrosContainer>
      <h2>Filtros</h2>
      <h3> Faixa de preço</h3>
      <label>Valor mínimo</label>
      <input
        value={props.minFilter}
        onChange={alterarMinFilter}
        placeholder="R$ 0,00"
      />
      <label>Valor máximo</label>
      <input
        value={props.maxFilter}
        onChange={(e) => props.setMaxFilter(e.target.value)}
        placeholder="R$ 500,00"
      />
      <h3> Tipo de produto</h3>
      <select
        value={props.searchFilter}
        onChange={(e) => props.setSearchFilter(e.target.value)}
      >
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
      <select
        value={props.searchFilterMaterial}
        onChange={(e) => props.setSearchFilterMaterial(e.target.value)}
      >
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
