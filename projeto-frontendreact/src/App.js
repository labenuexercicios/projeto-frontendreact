import { createGlobalStyle } from "styled-components";
import React from "react";
import { useState, useEffect } from "react";
import Filtros from './Componentes/Filtros/Filtros';
import Carrinho from "./Componentes/Carrinho/Carrinho";
import Header from "./Componentes/Header/Header"
import Footer from "./Componentes/Footer/Footer"
import produtos from "./Componentes/Produtos/produtos"
import { Main, Section, Cards, ImagemProduto, MainContainer, Nome, Value, Button } from "./Styles.js";

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    overflow-x: hidden
  }
  body::-webkit-scrollbar {
  width: 5px;               
  }

  body::-webkit-scrollbar-track {
  background-image: url("https://i.pinimg.com/originals/96/48/17/964817c3d30f206246d49bf28ca1a96f.jpg");
  background-attachment: local;       
  }

  body::-webkit-scrollbar-thumb {
  background-color: white;    
  border-radius: 5px;       
}
`;

function App() {

  const [buscar, setBuscar] = useState("");
  const [ordenacao, setOrdenacao] = useState ("")
  const [valorMinimo, setValorMinimo] = useState("");
  const [valorMaximo, setValorMaximo] = useState("");
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    const novoCarrinho =[...cartItems]

    const produtoNovo = novoCarrinho.find((novoItem)=> novoItem.id === product.id)
    if(!produtoNovo){
      const novoProduto = {...product, qtd: 1}
      novoCarrinho.push(novoProduto)
    }else{
      produtoNovo.qtd++
    }
    const virarString = JSON.stringify(novoCarrinho)
    localStorage.setItem("local", virarString)
    setCartItems(novoCarrinho)
  }

  const consultarItem =()=>{
    if(localStorage.getItem("local")){    
    const armazenarItem = localStorage.getItem("local")
    const pegarString = JSON.parse(armazenarItem);
    setCartItems(pegarString)
  }
  }

  useEffect (()=> {
    consultarItem()
  },[])

  return (
    <>
      <GlobalStyle />
        <Header />
        <MainContainer>
          <Filtros 
          buscar={buscar}
          setBuscar={setBuscar}
          valorMinimo={valorMinimo}
          setValorMinimo={setValorMinimo}
          valorMaximo={valorMaximo}
          setValorMaximo={setValorMaximo}
          ordenacao={ordenacao}
          setOrdenacao={setOrdenacao}
          />
          <Main>
            <Section>
              {produtos.filter((produto) => {
                return produto.nome.toLowerCase().includes(buscar.toLowerCase());
              })
              .filter((produto) => {
                return valorMinimo? valorMinimo <= produto.valor : produto
              })
              .filter((produto) => {
                return valorMaximo? valorMaximo >= produto.valor : produto
              })
              .sort((a, b)=>{
                if(ordenacao === "crescente"){
                  if(a.valor < b.valor){
                    return -1
                  } else {
                    return 1
                  }
                } else if(ordenacao === "decrescente"){
                    if(a.valor < b.valor){
                      return 1
                    } else {
                      return -1
                    }
                }
              })
              .map((product) => {
              return (
                <Cards key={product.id}>
                  <ImagemProduto src={product.imagemUrl}/>
                  <Nome>
                   <span>{product.nome}</span>
                   <Value>R$ {product.valor.toLocaleString('pt-br',{ minimumFractionDigits: 2})}</Value>
                   <Button onClick={() => onAdd(product)}>Comprar</Button>
                  </Nome>
                </Cards>
              )})}
            </Section>
          </Main>
          <Carrinho  
          cartItems={cartItems}
          setCartItems={setCartItems}
          />
        </MainContainer>
        <Footer />
    </>
  );
}

export default App;
