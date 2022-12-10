import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { HomePageStyled } from "./styled";
import CardProduto from "../../components/CardProduto";

export default function HomePage() {
  const context = useContext(GlobalContext);
  const {
    produtos,
    limparPesquisa,
    filtroTexto,
    filtroOrdenar,
    atualizaFiltroTexto,
    atualizaFiltroOrdenar,
    valorMin,
    valorMax,
    atualizaValorMax,
    atualizaValorMin,
  } = context;

  return (
    <>
      <HomePageStyled>
        <aside className="container-filtros">
          <aside className="filtro-por-ordem">
            <select onChange={atualizaFiltroOrdenar} value={filtroOrdenar}>
              <option value="">Ordenar</option>
              <option value="menor-valor">Menor Valor</option>
              <option value="maior-valor">Maior Valor</option>
            </select>
          </aside>

          <aside className="filtro-por-valor">
            <h4>Filtro:</h4>
            <p>valor mínimo:</p>
            <input
              type="text"
              className="filtrar-Dados"
              placeholder="R$"
              value={valorMin}
              onChange={atualizaValorMin}
              size={9}
              maxLength={10}
            />
            <p>valor máximo:</p>
            <input
              type="text"
              className="filtrar-Dados"
              placeholder="R$"
              value={valorMax}
              onChange={atualizaValorMax}
              size={9}
              maxLength={10}
            />
          </aside>
          <button className="botao-limpar" onClick={limparPesquisa}>
            Limpar
          </button>
        </aside>

        <section>
          <h2> Produtos</h2>
          <hr />
          <section className="container-main">
            {produtos
              .filter((item) =>
                item.nome.toLowerCase().includes(filtroTexto.toLowerCase())
              )
              .sort((a, b) => {
                if (filtroOrdenar === "menor-valor") {
                  if (a.valor < b.valor) {
                    return -1;
                  } else {
                    return 1;
                  }
                } else if (filtroOrdenar === "maior-valor") {
                  if (a.valor < b.valor) {
                    return 1;
                  } else {
                    return -1;
                  }
                }
              })

              .filter((produto) => {
                return produto.valor >= valorMin;
              })
              .filter((produto) => {
                return valorMax ? produto.valor <= valorMax : produto;
              })

              .map((produto) => (
                <CardProduto produto={produto} key={produto.id} />
              ))}
          </section>
        </section>
      </HomePageStyled>
    </>
  );
}
