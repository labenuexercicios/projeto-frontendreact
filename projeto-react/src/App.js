
import './App.css';

import Header from './componentes/Header/Header';
import { listaDeProdutos} from "../src/componentes/Data/data"
import { GlobalStyle } from './componentes/GlobalStyle/GlobalStyle';
import Homepage from './componentes/Homepage/Homepage';
import Footer from './componentes/Footer/Footer';
import { useEffect, useState } from 'react';
import CardProduto from './componentes/CardProduto/CardProduto';



function App() {
  // estados
  const [valorMinimo, setValorMinimo]=useState("")
  const [valorMaximo, setValorMaximo]=useState("")
  const [buscaNome, setBuscaNome]=useState("")
  const [listaProdutos, setListaProdutos]=useState(listaDeProdutos)
  const [ordenacao, setOrdenacao]=useState("nome")
  const [ordem, setOrdem]= useState("cresc")
  const [carrinho, setCarrinho]=useState([])
  const [trocarCarrinhoDetalhes, setTrocarCarrinhoDetalhes] = useState("home")

  // inputs controlados
  const handleValorMinimo = (event)=>{setValorMinimo(event.target.value)}
  const handleValorMaximo = (event)=>{setValorMaximo(event.target.value)}
  const handleBuscaNome = (event)=>{setBuscaNome(event.target.value)}
  const handleOrdenacao = (event)=>{setOrdenacao(event.target.value)}
  const handleOrdem =(event)=>{setOrdem(event.target.value)}
 
  //renderização no carirnho
  const produtosCarrinho=carrinho.map((produto)=>{
    return (
      <CardProduto
      key={produto.id}
      produto={produto}
      />
    )
  })

  // funcao adicionar ao carrinho

  const adicionarAoCarrinho = (produto)=>{

    const novoProduto = carrinho.find((item)=>item.id === produto.id)
    
    if(novoProduto === undefined){
      setCarrinho([...carrinho, {...produto, quantidade:1 }])
    }else{
      const novoCarrinho = carrinho.map((item)=>{
        if(item.id=== produto.id){
          return{...novoProduto, quantidade:novoProduto.quantidade+1 }
        }else{
          return item
        }

      })
      setCarrinho(novoCarrinho)
    } 


  }

  //funcao de deletar do carrinho

  const deletarDoCarrinho = (produto)=>{
    const deletandoProduto = carrinho.find((item)=>item.id === produto.id) 
    if(deletandoProduto.quantidade>1){

      const novoCarrinho = carrinho.map((item)=>{
        if(item.id=== produto.id){
          return{...deletandoProduto, quantidade:deletandoProduto.quantidade-1 }
        }else{
          return item
        }

      })  
      setCarrinho(novoCarrinho)
      


    }else{
        const novoCarrinho = carrinho.filter((item)=>{
          return item.id !== produto.id

        })
        setCarrinho(novoCarrinho)
    }
  }

  //calcular total
  //pesquisar melhor a função do reduce, pelo que entendi o primeiro parametro é o contador, o segundo ele realiza a operação e acumula, provavelmente não é isso, estudarei mais sobre
  const valorTotal = carrinho.reduce((acc, current)=>acc + current.preco * current.quantidade,0)
  const quantidadeTotal = carrinho.reduce((acc, current)=> acc + current.quantidade,0)
  

  

  //limpar carinho

  const limpar = ()=>{

    setCarrinho([])
        
  }

//troca pagina

const trocarPagina =(pagina)=>{

  setTrocarCarrinhoDetalhes(pagina)
}


  // local storage e use effect
  // gurdando os produtos do carrinho nolocal storaage, como eu coloquei o estado carrinho no array de dependencias, sempre que eu mudar o estado (por exemplo adicionando ou removendo algo, ou limpando a lista), o use effect entra em ação e faz a verificação
  // Obs: ele adiciona ao local strogae, porem quando atualizo a pagina ele zera o local storage. se eu colocar carrinho.lenght > 0 e eu remover os itens do carrinho, sempre fica um item no locaStorage e se eu atualizar a pagina ele volta, mesmo eu tendo removido antes
  useEffect (()=>{

    
    carrinho.length >= 0 &&
    localStorage.setItem("carrinho", JSON.stringify(carrinho))
    
    
  },[carrinho])
      
  useEffect(()=>{
    
    setCarrinho(JSON.parse(localStorage.getItem("carrinho")))
  },[])

 

  return (
    <>
      <GlobalStyle/>
      <Header/>
      <Homepage estados={{valorMinimo, valorMaximo, buscaNome, ordenacao, ordem ,listaProdutos, carrinho}} handles={{handleValorMinimo, handleValorMaximo, handleBuscaNome, handleOrdenacao, handleOrdem}} funcoes ={{adicionarAoCarrinho, deletarDoCarrinho, limpar, valorTotal, quantidadeTotal, trocarPagina}}/>
      <Footer/>

     </>
  );
}

export default App;


