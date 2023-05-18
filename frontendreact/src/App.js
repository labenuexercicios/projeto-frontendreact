import React from "react";
import "./App.css";
import styled, { createGlobalStyle } from "styled-components";
import TelaLogin from "./Componentes/TelaLogin/TelaLogin";
import TelaCadastro from "./Componentes/TelaCadastro/TelaCadastro";
import TelaUsuarioCadastrado from "./Componentes/TelaUsuarioCadastrado/TelaUsuarioCadastrado.js";
import TelaCadastroEndereco from "./Componentes/TelaCadastroEndereco/TelaCadastroEndereco";
import { lista } from "./Componentes/ListaProdutos/ProductCard/ProductsList"
import Footer from "./Componentes/Footer/Footer";
import Header from "./Componentes/Header/Header";
import Filters from "./Componentes/Filtros/Filters"
import Home from "./Componentes/ListaProdutos/Home/Home";
import Carrinho from "./Componentes/Carrinho/Carrinho";
import { GlobalStyle } from "./Componentes/GlobalStyle";
import { useState } from "react";


const MainContainer = styled.div`
  display: flex;
  flex-direction: column-gap;
  justify-content: space-between;
  border: 1px solid black;
  height: 80vh;
  width: 100vw;
  background-color: #fff;
`

function App() {

  
  const [valorMinimo, setValorMinimo] = useState("0");
  const [valorMaximo, setValorMaximo] = useState("0");
  const [ordenar, setOrdenar] = useState("")
  const [products, setProducts] = useState("lista")
  const [valorMax, setValorMax] = useState("")
  const [valorMin, setValorMin] = useState("")
  const [name, setName] = useState("")
    
  const handleInputName = (event) => setName(event.target.value)
  const handleValorMin = (event) => setValorMin(event.target.value)
  const handleValorMax = (event) => setValorMax(event.target.value)
  
  const handleOrdenar = (event) => {
    setOrdenar(event.target.value)  }

  const [valorCondicional, setValorCondicional] = useState()
  const [page, setPage] = useState("App")
  const mudarTela = (valor) => {
    setValorCondicional(valor)
  }

  const changePage = (page) => setPage(page)

  const renderizaTela = () => {
    switch (valorCondicional) {
      case 1:
        return <TelaLogin mudarTela={mudarTela} />;
      case 2:
        return <TelaCadastro mudarTela={mudarTela} />;
      case 3:
        return <TelaUsuarioCadastrado />
      case 4:
        return <TelaCadastroEndereco mudarTela={mudarTela} />
    }
  }
  
  return (
    <>
      <GlobalStyle />
      <Header/>
      <MainContainer>
        <Filters 
        valorMax={valorMax}
        valorMin={valorMin}
        name={name}
        handleInputName={handleInputName}
        handleValorMin={handleValorMin}
        handleValorMax={handleValorMax}
        />
        <Home 
        products={products}
        lista={lista}
        handleOrdenar={handleOrdenar}
        handleInputName={handleInputName}
        />
        <Carrinho/>
      </MainContainer> 
      <Footer/>

      {valorCondicional === 1 && <TelaLogin mudarTela={mudarTela} />}
      {valorCondicional === 2 && <TelaCadastro mudarTela={mudarTela} />}
      {valorCondicional === 3 && <TelaUsuarioCadastrado />}
      {valorCondicional === 4 && <TelaCadastroEndereco mudarTela={mudarTela} />}
      {renderizaTela()}
      
    </>
  );
}
export default App