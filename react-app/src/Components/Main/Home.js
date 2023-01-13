import { ContainerCentral, ContainerCentralSuperior, Produto, Figure, Feed, InfosProdutos, Segundo} from "./Style"
import Banner from "../Banner/Banner"
import { useState, useEffect } from 'react'
import Carrinho from "./Carrinho"
import Filtro from "../Filtros/Filtros"
import { Central, Geral } from "./Style"

import img1 from "../Assets/image1.png"
import img2 from "../Assets/image2.png"
import img3 from "../Assets/image3.png"
import img4 from "../Assets/image4.png"
import img5 from "../Assets/image5.png"
import img6 from "../Assets/image6.png"
import img7 from "../Assets/image7.png"
import img8 from "../Assets/image8.png"
import img9 from "../Assets/image9.png"
import img10 from "../Assets/image10.png"
import img11 from "../Assets/image11.png"

const Home = (props) => {

  const itens = [
    {
      id: "001",
      nome: "Abdução",
      preco: 65.50,
      imagem: img1,
    },
    {
      id: "002",
      nome: "Ressaca no Espaço",
      preco: 70.50,
      imagem:img2,
    },
    {
      id: "003",
      nome: "Ônibus Espacial",
      preco: 74.75,
      imagem:img3,
    },
    {
      id: "004",
      nome: "Well, That Sucks",
      preco: 74.90,
      imagem:  img4,
    },
    {
      id: "005",
      nome: "Podando a Lua",
      preco: 62.75,
      imagem:img5,
    },
    {
      id: "006",
      nome: "Burrito de Gatito",
      preco: 40.50,
      imagem:img6,
    },
    {
      id: "007",
      nome: "Galaxito ",
      preco: 61.95,
      imagem: img7,
    },
    {
      id: "008",
      nome: "Limpeza Estelar",
      preco: 50.80,
      imagem: img8,
    },
    {
      id: "009",
      nome: "Terra Plana",
      preco: 69.50,
      imagem:img9,
    },
    {
      id: "0010",
      nome: "Camisa Et",
      preco: 78.70,
      imagem:  img10,
    },
    {
      id: "0011",
      nome: "Lua de Mineiro",
      preco: 75.99,
      imagem:  img11,
    }
  ]
 
  const [pesquisa, setPesquisa] = useState("")
  const [valorMinimo, setValorMinimo] = useState("")
  const [valorMaximo, setValorMaximo] = useState("")
  const [ordem, setOrdem] = useState("") 
 
  const itensRenderizadoTela = itens
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

useEffect(() => {
  if (props.carrinho.length > 0) {
    const listaStringCarrinho = JSON.stringify(props.carrinho)
    localStorage.setItem("carrinho", listaStringCarrinho)
  }
}, [props.carrinho])

useEffect(() => {
  const novoCarrinho = JSON.parse(localStorage.getItem("carrinho"))
  if (novoCarrinho !== null) {
    props.setCarrinho(novoCarrinho)
  }
}, [])



return (
  <>
<Geral>
  <Banner/>
  <Central>
    <Filtro
      pesquisa={pesquisa}
      setPesquisa={setPesquisa}
      minimo={valorMinimo}
      setMinimo={setValorMinimo}
      maximo={valorMaximo}
      setMaximo={setValorMaximo}
    />
    <ContainerCentral>
      <ContainerCentralSuperior>
        <div>
          <h3>
            Resultado da busca:
          </h3>
          <p>
            {itensRenderizadoTela.length} produtos
          </p>
        </div>
        <div>
          <select value={ordem} onChange={onChangeOrdem}>
            <option value="">Ordenar por</option>
            <option value="Maior">Preço: do maior para o menor</option>
            <option value="Menor">Preço: do menor para o maior</option>
          </select>
        </div>
      </ContainerCentralSuperior>
      <Feed>

        {itensRenderizadoTela
          .map((produto, index) => {
            return (
              <Produto key={index}>
                <Figure>
                  <img src={produto.imagem} alt="Produto" />
                </Figure>
                <InfosProdutos>
                  <span>{produto.nome}</span><br />
                  <h3>R$ {produto.preco.toFixed(2)}</h3><br />
                  <button onClick={() => compraProduto(produto)} onChange={onChangeCarrinho}>Comprar</button>
                </InfosProdutos>
              </Produto>)
          })}

      </Feed>
    </ContainerCentral>


    <Carrinho
      cesta={props.carrinho}
      setCesta={props.setCarrinho}
      carrinhoCompleto={props.mudarTela}
    />
</Central>
</Geral>
  </>
)
}

export default Home