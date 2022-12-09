import produtos from "../../assets/produtos.json"
import {
  MainContainer,
  Card,
  SectionContainer,
  SectionImg,
  SectionThings,
  SectionFilter,
  TituloFilter,
  Select,
  Botao
} from "./styled"
import car from "../../assets/carrinho.png"
import { useState } from "react"

export const ProdutoCard = (props) => {
  const [filtrado, setFiltrado] = useState("")
  const [alfabeto, setAlfabeto] = useState("ordem")
  const [maximo, setMaximo] = useState("")
  const [minimo, setMinimo] = useState("")

  const limparFiltro = () => {
    setFiltrado("")
    setMaximo("")
    setMinimo("")
  }

  return (
    <MainContainer>
      <SectionFilter>
        <div>
          <div>
            <TituloFilter>Filtros</TituloFilter>
          </div>
          <div className="search">
            <input
              placeholder="Pesquisar por nome"
              value={filtrado}
              onChange={(e) => setFiltrado(e.target.value)}></input>
          </div>
          <div className="search">
            <input
              type="number"
              placeholder="Preço máximo"
              value={maximo}
              onChange={(e) => setMaximo(e.target.value)}></input>
          </div>
          <div className="search">
            <input
              type="number"
              placeholder="Preço mínimo"
              value={minimo}
              onChange={(e) => setMinimo(e.target.value)}></input>
          </div>
          <div>
            <Select
              value={alfabeto}
              onChange={(e) => setAlfabeto(e.target.value)}>
              <option value="ordem">Crescente/Decrescente</option>
              <option value="crescente">Crescente</option>
              <option value="decrescente">Decrescente</option>
            </Select>
          </div>
          <div>
            <Botao onClick={limparFiltro}>Limpar Filtro</Botao>
          </div>
        </div>

      </SectionFilter>
      <SectionContainer>
        {produtos.filter((produto) => produto.nome.toLowerCase().includes(filtrado.toLowerCase())
        ).sort((a, b) => {
          if (alfabeto === "crescente") {
            if (a.nome < b.nome) {
              return -1
            } else {
              return 1
            }
          }
        }).sort((a, b) => {
          if (alfabeto === "decrescente")
            if (a.nome > b.nome) {
              return -1
            } else {
              return 1
            }
        }).filter((produto) => {
          return maximo ? produto.preco < (Number(maximo)) : produto
        }).filter((produto) => {
          return minimo ? produto.preco > (Number(minimo)) : produto
        })
          .map((produto) => {
            return (
              <Card key={produto.id}>
                <div>
                  <SectionImg src={require("../../assets/" + produto.imagem)} alt={produto.alt} />
                </div>
                <div className="section-name">
                  <span>
                    <h1 >{produto.nome}</h1>
                  </span>
                </div>
                <SectionThings >
                  <span className="section-things">
                    {`Preço: R$${produto.preco.toFixed(2)}`}
                  </span>
                  <span>
                    <button onClick={() => props.adiconarCarrinho(produto)}><img src={car} alt="imagem carrinho" /></button>
                  </span>
                </SectionThings>
              </Card>
            )
          })}
      </SectionContainer>
    </MainContainer>
  )
}