import { Aside, Style } from "./styled";

export function Filtro({
  precoMin,
  setPrecoMin,
  precoMax,
  setPrecoMax,
  verificaNome,
  setVerificaNome,
  setOrdenacao,
  ordenacao,
}) {
// ABAIXO CODIGOS DE FUNÇÕES

  const getOrdem = (e) => {
    setOrdenacao(e.target.value);
  };
console.log(ordenacao)
  const getNome = (e) => {
    setVerificaNome(e.target.value);
  };

  const getPrecoMin = (e) => {
    setPrecoMin(e.target.value);
  };

  const getPrecoMax = (e) => {
    setPrecoMax(e.target.value);
  };

  return (
    <>
      <Aside>
        <h1>Filtros</h1>
        <Style>
          <p>Preço</p>
          <select value={ordenacao} onChange={getOrdem}>
            <option>Escolha a Ordem</option>
            <option>Crescente</option>
            <option>Decrescente</option>
          </select>
          <p>Valor mínimo</p>
          <input type="number" value={precoMin} onChange={getPrecoMin} />
          <p>Valor máximo</p>
          <input type="number" value={precoMax} onChange={getPrecoMax} />
          <p>Busca por Nome</p>
          <input type="text" value={verificaNome} onChange={getNome} />
        </Style>
      </Aside>
    </>
  );
}
