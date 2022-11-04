// import React from "react";
import { MainContainer, Filtro, CarrinhoDeProdutos, SectionContainer, Produto, Marca, Nave, Card } from './styles'
import { useState } from "react"
import { Filtros } from "../Filtros/Filtros.js"
import { Carrinho } from "../Carrinho/Carrinho.js"
import imagemRocketLab from "../img/rl.svg"
import imagemBlueOrigin from "../img/bo.svg"
import imagemIsro from "../img/i.svg"
import imagemSpaceX from "../img/sx.svg"
import imagemArianeGroup from "../img/ag.svg"
import imagemStarship from "../img/starship.png"
import imagemBlue from "../img/new-shepard.png"
import imagemAriane from "../img/ariane.png"
import imagemIndia from "../img/india.png"
import imagemFalcon from "../img/falcon-heavy.png"
import imagemNeutron from "../img/neutron.png"



export default function Produtos(props) {

  const produto = [
    {
      nave: "Neutron",
      fabricante: "Rocket Lab",
      altura: 40,
      preco: 6.7,
      empuxo: "7 Mn",
      propulsor: "CH₄, LOX",
      origem: "Washington, EUA",
      marca: imagemRocketLab,
      imagem: imagemNeutron,
    },

    {
      nave: "New Shepard",
      fabricante: "Blue Origin",
      altura: 18,
      preco: 2.5,
      empuxo: "490 Kn",
      propulsor: "LH2, LOX",
      origem: "Califórnia, EUA",
      marca: imagemBlueOrigin,
      imagem: imagemBlue,
    },

    {
      nave: "Ariane 6",
      fabricante: "Ariane Group",
      altura: 63,
      preco: 3.6,
      empuxo: "4.65 Mn",
      propulsor: "LH2, LOX",
      origem: "Ag. Esp. Européia",
      marca: imagemArianeGroup,
      imagem: imagemAriane,
    },

    {
      nave: "GSLV MK-III",
      fabricante: "Isro",
      altura: 42,
      preco: 1,
      empuxo: "750 Kn",
      propulsor: "HTPB",
      origem: "Nova Délhi, Índia",
      marca: imagemIsro,
      imagem: imagemIndia,
    },

    {
      nave: "Falcon Heavy",
      fabricante: "Space X",
      altura: 70,
      preco: 0.5,
      empuxo: "15.2 Mn",
      propulsor: "LOX, RP-1",
      origem: "Califórnia, EUA",
      marca: imagemSpaceX,
      imagem: imagemFalcon,

    },
    {
      nave: "Starship",
      fabricante: "Space X",
      altura: 50,
      preco: 0.5,
      empuxo: "72 Mn",
      propulsor: "LOX, CH₄",
      origem: "Califórnia, EUA",
      marca: imagemSpaceX,
      imagem: imagemStarship,

    },
  ]

  const [busca, setBusca] = useState("")
  const [minPreco, setMinPreco] = useState(-Infinity)
  const [maxPreco, setMaxPreco] = useState(Infinity)
  const [ordenacao, setOrdenacao] = useState("nave")
  const [ordenacaoCrescente, setOrdenacaoCrescente] = useState("asc")




  return (
    <MainContainer>
      <CarrinhoDeProdutos>
        <Carrinho>

        </Carrinho>
      </CarrinhoDeProdutos>
      <Filtro> 
        <Filtros
          busca={busca}
          minPreco={minPreco}
          maxPreco={maxPreco}
          ordenacao={ordenacao}
          ordenacaoCrescente={ordenacaoCrescente}
          setBusca={setBusca}
          setMinPreco={setMinPreco}
          setMaxPreco={setMaxPreco}
          setOrdenacao={setOrdenacao}
          setOrdenacaoCrescente={setOrdenacaoCrescente}
        />
      </Filtro>
      <SectionContainer>
        {produto
          .filter((filtro) => {
            return filtro.nave.includes(busca)
          })
          .filter((filtro) => {
            return filtro.preco >= minPreco || minPreco === ""
          })
          .filter((filtro) => {
            return filtro.preco <= maxPreco || maxPreco === ""
          })
          .sort((valortAtual, valorSeguinte) => {
            switch (ordenacao) {
              case "preco":
                return valortAtual.preco - valorSeguinte.preco
              case "altura":
                return valortAtual.altura - valorSeguinte.altura
              default:
                return valortAtual.nave.localeCompare(valorSeguinte.nave)
            }
          })
          .sort(() => {
            if (ordenacaoCrescente === "asc") {
              return
            } else {
              return -1
            }
          })
          .map(item => {
            return <Card>
              <div>
              <div class="marca">
              <Marca src={item.marca} />
              </div>
              <div>
               <button onClick={""}>Comprar</button> 
              </div>
              </div>
              <div class="imagem">
              <Produto src={item.imagem} />
              </div>
              <Nave>
              <div class="nave">
                <h3>{item.nave}</h3>
              </div>
              <div class="propriedades">
                <h5>Altura: {item.altura}mts</h5>
                <h5>Empuxo: {item.empuxo}</h5>
                <h5>Propulsor: {item.propulsor}</h5>
                <h5>Origem: {item.origem}</h5>
                <h5>Fabricante: {item.fabricante}</h5>
              </div>
              <div class="preco">
                <h4>Preço: US$ {item.preco}bi</h4>
              </div>
              </Nave>
            </Card>
          })
        }
      </SectionContainer>
    </MainContainer>

  );

}
