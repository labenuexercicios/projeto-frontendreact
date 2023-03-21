import {BoxCentral, Card, Imagem, BoxCard} from "./styles"
import {useState, useEffect} from 'react'
import Carrinho from "./Carrinho"
import Filtro from "./Filtro"

function Home (props){

  const produtos = [{
    id: 1,
    nome: "Camiseta Astronauta",
    preco: 40.99,
    imagem: "https://www.rockzclub.com.br/wp-content/uploads/2017/10/MR-030.jpg",

  },{
    id: 2,
    nome: "Camiseta Montanhas Espaciais",
    preco: 65.99,
    imagem: "https://images.tcdn.com.br/img/img_prod/761391/camiseta_desenho_paisagem_montanhas_e_espaco_jp386_3565_1_d4d95283b2b4272c3937e134fae60d24.png",

  },{
    id: 3,
    nome: "Camiseta Nasa",
    preco: 59.90,
    imagem: "https://img.elo7.com.br/product/zoom/2CDCBF3/camiseta-nasa-challenger-astronomia-camisa-geek-moda-tumblr-nasa.jpg",

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
        if(a.preco<b.preco){
          return -1
        }else{
          return 1
        }
    }
  })
  
    const onChangeCarrinho = (event)=>{
      props.setCarrinho(event.target.value)
    }

    const onChangeOrdem =(event)=>{
      setOrdem(event.target.value)
    }

 
    // função compra de produtos carrinho
    const compraProduto = (produto) =>{
      const novoCarrinho = [...props.carrinho]
      const produtoAdicionado = produto
      const produtoExistente = novoCarrinho.find((produto)=>{
          return produto.id === produtoAdicionado.id 
      })
          if (produtoExistente){
            produtoExistente.quantidade++
            produtoExistente.precototal = produtoExistente.quantidade * produtoExistente.preco
          }else{
            novoCarrinho.push({...produtoAdicionado, quantidade: 1, precototal: produtoAdicionado.preco})
          } 
        props.setCarrinho(novoCarrinho)
    }

    //local storage hook carrinho
    useEffect(() => {
          if(props.carrinho.length>0){
          const listaStringCarrinho = JSON.stringify(props.carrinho)
          localStorage.setItem("carrinho",listaStringCarrinho)
        }
        },[props.carrinho])

    
     // local storage hook
    useEffect(() => {
        const novoCarrinho = JSON.parse(localStorage.getItem("carrinho"))
          if(novoCarrinho !== null){
            props.setCarrinho(novoCarrinho)
          }   
    },[])
   

    return(
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
          .map((produto, index)=>{
            return(
            <Card key={index}>
            <div>
                <img src={produto.imagem} alt="Produto-Loja"/>
            </div>
            <div>
                <span>{produto.nome}</span><br/>
                <h3>R$ {produto.preco.toFixed(2)}</h3><br/>
                <button onClick={()=>compraProduto(produto)} onChange={onChangeCarrinho}>Comprar</button>             
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