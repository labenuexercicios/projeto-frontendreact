import React, { useState } from 'react';
import Footer from './Componetes/Footer/Footer';
import { Header } from './Componetes/Header/Header';
import Main from './Componetes/Main/Main';
import { GlobalContext } from "./contexts/GlobalContext";
import { Carrinho } from './Componetes/Carrinho/Carrinho'

function App() {
  const [BuscarAeronave, setBuscarAeronave] = useState('')
  const [BuscarModelo, setBuscarModelo] = useState('')
  const [ListaCarrinho, setListaCarrinho] = useState([])
  const [pagina, setPagina] = useState(1)
  const [ordenFiltro, setOrdenFiltro] = useState("")


  const guardarNave = ()=>{
    const naveEmString = JSON.stringify(ListaCarrinho)
    console.log(naveEmString);
  }

  const addNave = (naveAAdicionar) => {
    const naveEncontrada = ListaCarrinho.find((naveNoCarrinho) => naveNoCarrinho.id === naveAAdicionar.id)

    if (!naveEncontrada) {
      const novaNave = {
        ...naveAAdicionar,
        quantidade: 1,
      };
      ListaCarrinho.push(novaNave)
    } else {
      naveEncontrada.quantidade++;
    }
  }
  
  const addQuantidade = (id)=>{
    const naveAdicionada = ListaCarrinho.find((xxx)=> xxx.id === id )
    naveAdicionada.quantidade +=1
    return naveAdicionada.quantidade
  }
  const diminuirQuantidade = (id)=>{
    const naveAdicionada = ListaCarrinho.find((xxx)=> xxx.id === id )
    if(naveAdicionada.quantidade <= 1){
      setListaCarrinho(ListaCarrinho.filter((itemCarrinho)=> itemCarrinho.id !== id)) 
      return 0
    }else{
      naveAdicionada.quantidade -=1
      return naveAdicionada.quantidade
    }
  }
  
  const context = {
    addNave,
    addQuantidade,
    diminuirQuantidade,
    guardarNave,
  };

  return pagina === 1 ? (
    <GlobalContext.Provider value={context}>
      <Header
        BuscarAeronave={BuscarAeronave}
        setBuscarAeronave={setBuscarAeronave}
        BuscarModelo={BuscarModelo}
        setBuscarModelo={setBuscarModelo}
        setPagina={setPagina}
        ordenFiltro={ordenFiltro}
        setOrdenFiltro={setOrdenFiltro}
        />
        
      <Main
        BuscarAeronave={BuscarAeronave}
        BuscarModelo={BuscarModelo}
        ListaCarrinho={ListaCarrinho}
        setListaCarrinho={setListaCarrinho}
        ordenFiltro={ordenFiltro}
        setOrdenFiltro={setOrdenFiltro}
      />
      <Footer />
    </GlobalContext.Provider>
  ) : (
    <GlobalContext.Provider value={context}>
      <Header
        BuscarAeronave={BuscarAeronave}
        setBuscarAeronave={setBuscarAeronave}
        BuscarModelo={BuscarModelo}
        setBuscarModelo={setBuscarModelo}
        setPagina={setPagina} />
      <Carrinho
        setPagina={setPagina}
        ListaCarrinho={ListaCarrinho}
       

      />
    </GlobalContext.Provider>)
}
export default App;





