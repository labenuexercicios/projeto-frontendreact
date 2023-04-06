import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Header } from './Componentes/Header/Header'
import { GlobalStyle } from './GlobalStyles'
import { Main } from './Componentes/Main/Main'
import { PopUp } from './Componentes/PopUp/PopUp.jsx'
import { PopUpFilter } from './Componentes/PopUpFilter/PopUpFIlter'
import { Carrinho } from './Componentes/Carrinho/Carrinho'

function App() {


  const produtos = [
    {
      nome: "HUBBLE",
      img: "https://terramagna.com.br/wp-content/uploads/2022/09/aparelho-imagens-de-satelite-espaco-terra.jpg",
      preco: 1000000,
      descricao: "O melhor dos satélites",
      id: 1
    },
    {
      nome: "BUBBLEBEE",
      img: "https://ogimg.infoglobo.com.br/in/12792199-5d6-92c/FT1086A/satelite-oi.jpg",
      preco: 200000,
      descricao: "O melhor dos satélites",
      id: 2
    },
    {
      nome: "KUBRICK",
      img: "https://uploads.jovemnerd.com.br/wp-content/uploads/2022/02/satelite-capa.jpg",
      preco: 550000,
      descricao: "O melhor dos satélites",
      id: 3
    },
    {
      nome: "HOPI HARI",
      img: 'https://energiainteligenteufjf.com.br/wp-content/uploads/2020/09/qual-tamanho-satelite-tricurioso.jpg',
      preco: 460000,
      descricao: "O melhor dos satélites",
      id: 4
    }
  ]


  const [showPopUp, setShowPopUp] = useState(false)
  const [clickId, setClickId] = useState("")
  const [showFiltro, setShowFiltro] = useState(false)
  const [valorMax, setValorMax] = useState(0)
  const [getValorMax, setGetValorMax] = useState(0)
  const [valorMin, setValorMin] = useState(0)
  const [getValorMin, setGetValorMin] = useState(0)
  const [buscaNome, setBuscaNome] = useState("")
  const [getBuscaNome, setGetBuscaNome] = useState("")
  const [showCarrinho, setShowCarrinho] = useState(false)
  const [carrinho, setCarrinho] = useState([])
  const [valorTotal, setValorTotal] = useState(0)

  // const valorTotalHandler = () => {
  //   for(i=0;i<carrinho.length;i++){
  //     setValorTotal(valorTotal+carrinho[i].preco)
  //   }
  // }



  const removerCarrinho = (id) => {
   
    setCarrinho(carrinho.filter((satelite) => {
      if (satelite.id !== id) {
        return satelite
      }
    }))
  }

  const adicionarCarrinho = (item) => {
    const clicado = produtos.filter((satelite) => (satelite.id == clickId))[0];
    clicado.id = Date.now()
    setCarrinho([...carrinho, clicado]);
    console.log(carrinho)
    setValorTotal(valorTotal+clicado.preco)
    
  }

  // No Iphone se eu adiciono várias vezes no carrinho ele adiciona a mais

  // const adicionarCarrinho = (item) => {
  //   const clicado = produtos.filter((satelite)=>(satelite.id == clickId))[0];
  //   if(clicado.id != carrinho.filter((satelite)=>(satelite.id==clicado.id))[0].id){
  //     clicado.quantidade = 1; // Inicialmente, a quantidade é 1
  //     setCarrinho([...carrinho, clicado]);
  //   }
  //   else{
  //     clicado.quantidade++
  //   }

  //   console.log(carrinho);
  // }

  // const adicionarCarrinho = () => {
  //   const clicado = produtos.filter((satelite) => (satelite.id == clickId))[0];

  //   let itemExiste = false;
  //   const novoCarrinho = carrinho.map((item) => {
  //     if (item.id === clicado.id) {
  //       itemExiste = true;
  //       return {
  //         ...item,
  //         quantidade: item.quantidade + 1,
  //       };
  //     }
  //     return item;
  //   });

  //   if (!itemExiste) {
  //     novoCarrinho.push({ ...clicado, quantidade: 1 });
  //   }

  //   setCarrinho(novoCarrinho);
  //   console.log(carrinho);
  // };




  const buscaNomeHandler = (event) => {
    setBuscaNome(event.target.value)
    console.log(buscaNome)
  }

  const valorMaxHandler = (event) => {
    setValorMax(event.target.value)
    console.log(valorMax)
  }

  const valorMinHandler = (event) => {
    setValorMin(event.target.value)
    console.log(valorMin)
  }

  const valoresHandler = () => {
    setGetValorMax(valorMax)
    setGetValorMin(valorMin)
    setGetBuscaNome(buscaNome)
    console.log(getBuscaNome)
  }

  const resetValores = () => {
    setGetValorMax(0)
    setValorMax(0)
    setValorMin(0)
    setBuscaNome("")
  }

  const showCarrinhoHandler = () => {
    setShowCarrinho(!showCarrinho)
    console.log(showCarrinho)
  }

  const filterHandler = () => {
    setShowFiltro(!showFiltro)
  }

  const clickIdHandler = (event) => {
    setClickId(event.target.value)
  }

  const popUpHandler = (id) => {
    setShowPopUp(!showPopUp);
    setClickId(id)
    console.log(showPopUp)
    console.log(clickId)
  }

  return (
    <div className="App">
      <GlobalStyle />
      <Header showCarrinhoHandler={showCarrinhoHandler} />
      {showPopUp && <PopUp produtos={produtos} clickId={clickId} adicionarCarrinho={adicionarCarrinho} />}
      {showFiltro && <PopUpFilter valorMax={valorMax} valorMaxHandler={valorMaxHandler} getValorMax={valorMax} valoresHandler={valoresHandler} resetValores={resetValores} valorMin={valorMin} valorMinHandler={valorMinHandler} buscaNome={buscaNome} buscaNomeHandler={buscaNomeHandler} />}
      {showCarrinho && <Carrinho carrinho={carrinho} removerCarrinho={removerCarrinho} setCarrinho={setCarrinho} valorTotal={valorTotal} />}
      <Main produtos={produtos} popUpHandler={popUpHandler} filterHandler={filterHandler} valorMax={getValorMax} valorMin={getValorMin} buscaNome={getBuscaNome} />
    </div>
  )
}

export default App
