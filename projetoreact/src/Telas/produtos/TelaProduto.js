import produtos from "../../assets/produtos.json"
import { Main,Filtros, Cards } from "./TelaProduto.styled";
import { useState } from 'react'
import imagem from "../../assets/imagemvenda.jpg"





function TelaProduto(props) {
  const {adicionarCarrinho}= props //desconstrução da props

  console.log(produtos)

  //varaivel de estado que vai guardar o termo de busca
  const [buscar, setBuscar] = useState("")
  const [precoMinino, setPrecoMinimo] = useState(-Infinity)
  const [precoMaximo, setPrecoMaximo] = useState(Infinity)
  const [paramClassificacao, setParamCassificacao] = useState("name")
  const [ordenar, setOrdenar] = useState("")

  return (

    
    <Main >

      <Filtros>

        
          <div>
            <h1 className="tituloFiltro">FILTROS</h1>
            <input
              placeholder="Busca"
              value={buscar}
              onChange={(e) => setBuscar(e.target.value)}
            />
          </div>
          <div>
            {/* imput controlado */}
            <input placeholder="Preço mínimo"
              type="number"
              value={precoMinino}
              onChange={(e) => { setPrecoMinimo(e.target.value) }} />
          </div>
          <div>
            <input placeholder="Preço máximo"
              type="number"
              value={precoMaximo}
              onChange={(e) => { setPrecoMaximo(e.target.value) }} />
          </div>
          <span className="ordenar">
            <label for="paramClassificacao">Ordenar por:</label>

            <select
              value={paramClassificacao}
              onChange={(e) => setParamCassificacao(e.target.value)}
            >
              <option value={"name"}>Título</option>
              <option value={"price"}>Preço</option>
            </select>
            <select
              value={ordenar}
              onChange={(e) => setOrdenar(e.target.value)}
            >
              <option value="crescente">Crescente</option>
              <option value="decrescente">Decrescente</option>
            </select>
          </span>
        
      </Filtros>

      <Cards>

        <img className="imagemTopo" src={imagem}/>
      

        { produtos

          
            .filter((brinquedo) => {
              return brinquedo.name.toLowerCase().includes(buscar.toLowerCase())
            })
            .filter((brinquedo) => {
              return brinquedo.price >= precoMinino || precoMinino === ""
            })
            .filter((brinquedo) => {
              return brinquedo.price <= precoMaximo || precoMaximo === ""
            })
            .sort((atualBrinquedo, proximoBrinquedo) => {
              switch (paramClassificacao) {
                case "price":
                  return atualBrinquedo.price - proximoBrinquedo.price
                  default:
                    
                    return atualBrinquedo.name.localeCompare(proximoBrinquedo)
                  }
                })
            .sort(() => {
              if (ordenar === "crescente") {
                return 0
              } else {
                return -1
              }
            })
            
            
            .map((item) => {
            
            return (
              
              <div className="container">
              <div className="card" key={item.id}>
                <img className="imagens" src={item.imageUrl} /*alt={Produtos.imageAlt}*/ />
                <div>
                  <h2 className="nomeBrinquedo">{item.name}</h2>
                  <span>{produtos.rating}</span>
                </div>
                <div className="precoCompra">
                  <span>R$ {item.price},00</span>
                  <button className="botaoCompra" onClick={() => adicionarCarrinho(item)}>Compre Agora</button>
                </div>
              </div>

              </div>
            )})}
      </Cards>
    </Main>
  )
}

export default TelaProduto;