import { BoxCentral, Card, Imagem, BoxCard } from "./styles"
import { useState, useEffect } from 'react'
import Carrinho from "./Carrinho"
import Filtro from "./Filtros"

const Home = (props) => {

  const produtos = [{
    id: 1,
    nome: "Modulo de Comando - Apollo 11",
    preco: 58716.34,
    imagem: "https://ids.si.edu/ids/deliveryService?id=NASM-A19700102000-NASM2016-04272&max_w=900",

  }, {
    id: 2,
    nome: "Espaçonave Soyuz",
    preco: 39172.32,
    imagem: "https://cdn-cavok.nuneshost.com/wp-content/uploads/2019/08/soyuz-ms-14-russia-espaço-ISS-estação-espacial-internacional.jpg",

  }, {
    id: 3,
    nome: "Espelho James Webb",
    preco: 120394.12,
    imagem: "https://imagens.ebc.com.br/NgCtJc0aE_nP6lCfMsjvN0M5aRM=/1170x700/smart/https://agenciabrasil.ebc.com.br/sites/default/files/thumbnails/image/nasa_sophia_roberts_direitos_reservados01012100995.jpg?itok=Djx9XWWw",

  }, {
    id: 4,
    nome: "Onibus Espacial",
    preco: 827162.32,
    imagem: "https://classic.exame.com/wp-content/uploads/2016/09/size_960_16_9_nasa-discovery.jpg?quality=70&strip=info&w=960",

  }, {
    id: 5,
    nome: "Equipamento de Cosmonalta",
    preco: 3214.56,
    imagem: "https://cdnstatic8.com/vontadedeviajar.com/wp-content/uploads/2014/11/Museu-da-Cosmonautica-Roupa-de-astronauta-ou-seria-roupa-de-cosmonauta.jpg",

  }, {
    id: 6,
    nome: "Equipamento Astronalta",
    preco: 66666.66,
    imagem: "http://s2.glbimg.com/tv8OpGXJzOJHhSYlpePztfD94GM=/e.glbimg.com/og/ed/f/original/2015/11/05/flickr_jasbond007.jpg",
  }] 
 
  const [pesquisa, setPesquisa] = useState("")
  const [valorMinimo, setValorMinimo] = useState("")
  const [valorMaximo, setValorMaximo] = useState("")
  const [ordem, setOrdem] = useState("") 
 
  const produtosFiltradosTela = produtos
  .filter((produto) => produto.nome.includes(pesquisa))
  .filter((produto) => produto.preco >= valorMinimo)
  .filter((produto) => {return valorMaximo ? produto.preco <= valorMaximo:produto})
  .sort((a,b) =>{
     switch(ordem){
      case "Maior":
        if (a.preco < b.preco){
          return 1
        }else{
          return -1
}
      case "Menor":
if (a.preco < b.preco) {
  return -1
} else {
  return 1
}
    }
  })

const onChangeCarrinho = (event) => {
  props.setCarrinho(event.target.value)
}

const onChangeOrdem = (event) => {
  setOrdem(event.target.value)
}

//FUNÇÃO PARA COMPRA DE PRODUTOS NO CARRINHO
const compraProduto = (produto) => {
  const novoCarrinho = [...props.carrinho]
  const produtoAdicionado = produto
  const produtoExistente = novoCarrinho.find((produto) => {
    return produto.id === produtoAdicionado.id
  })
  if (produtoExistente) {
    produtoExistente.quantidade++
    produtoExistente.precototal = produtoExistente.quantidade * produtoExistente.preco
  } else {
    novoCarrinho.push({ ...produtoAdicionado, quantidade: 1, precototal: produtoAdicionado.preco })
  }
  props.setCarrinho(novoCarrinho)
}

//HOOK UTILIZADO PARA ARMAZENAR OS DADOS DO CARRINHO NO LOCALSTORAGE
useEffect(() => {
  if (props.carrinho.length > 0) {
    const listaStringCarrinho = JSON.stringify(props.carrinho)
    localStorage.setItem("carrinho", listaStringCarrinho)
  }
}, [props.carrinho])

//HOOK UTILIZADO PARA CARREGAR OS DADOS DO CARRINHO DO LOCALSTORAGE PARA A TELA
useEffect(() => {
  const novoCarrinho = JSON.parse(localStorage.getItem("carrinho"))
  if (novoCarrinho !== null) {
    props.setCarrinho(novoCarrinho)
  }
}, [])


return (
  <>
    <Filtro
      pesquisa={pesquisa}
      setPesquisa={setPesquisa}
      minimo={valorMinimo}
      setMinimo={setValorMinimo}
      maximo={valorMaximo}
      setMaximo={setValorMaximo}
    />
    <BoxCentral>
      <div className="boxcentral-topo">
        <div>
          <h3>
            Resultado da busca:
          </h3>
          <p>
            {produtosFiltradosTela.length} produtos
          </p>
        </div>
        <div>
          <select value={ordem} onChange={onChangeOrdem} className="boxcentral-topo-select">
            <option value="">Ordenar por</option>
            <option value="Maior">Preço: do maior para o menor</option>
            <option value="Menor">Preço: do menor para o maior</option>
          </select>
        </div>
      </div>
      <BoxCard>

        {produtosFiltradosTela
          .map((produto, index) => {
            return (
              <Card key={index}>
                <div>
                  <img src={produto.imagem} alt="Produto-Loja" />
                </div>
                <div>
                  <span>{produto.nome}</span><br />
                  <h3>R$ {produto.preco.toFixed(2)}</h3><br />
                  <button onClick={() => compraProduto(produto)} onChange={onChangeCarrinho}>Comprar</button>
                </div>
              </Card>)
          })}

      </BoxCard>
    </BoxCentral>
    <Carrinho
      cesta={props.carrinho}
      setCesta={props.setCarrinho}
      carrinhoCompleto={props.mudarTela}
    />
  </>
)
}

export default Home