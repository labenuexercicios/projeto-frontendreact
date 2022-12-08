import { createGlobalStyle } from "styled-components";
import React from "react";
import { useState, useEffect } from "react";
import Filtros from './Componentes/Filtros/Filtros';
import Carrinho from "./Componentes/Carrinho/Carrinho";
import Header from "./Componentes/Header/Header"
import { Main, Section, Cards, ImagemProduto, MainContainer, Nome, Value, Button } from "./Styles.js";
import imgId1 from "../src/asset/img/id1.png"
import imgId2 from "../src/asset/img/id2.png"
import imgId3 from "../src/asset/img/id3.png"
import imgId4 from "../src/asset/img/id4.png"
import imgId5 from "../src/asset/img/id5.png"
import imgId6 from "../src/asset/img/id6.png"
import imgId7 from "../src/asset/img/id7.png"
import imgId8 from "../src/asset/img/id8.png"
import imgId9 from "../src/asset/img/id9.png"

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`;

function App() {
  const produtos= [{
    id: 1,
    nome: "Brinquedos Espaciais com 2 Astronautas, Ônibus e Rover",
    valor: 299.00, 
    imagemUrl: imgId1
  },
  {
     id: 2,
     nome: "Kit Astronautas Estação Espacial Missão Marte",
     valor: 469.00,
     imagemUrl: imgId2
  },
  {
    id: 3,
    nome: "Brinquedo Nave Cápsula Espacial Com Astronauta",
    valor: 59.00,
    imagemUrl: imgId3
  },
  {
    id: 4,
    nome: "Brinquedos Conjunto de Naves e Equipamentos Espaciais",
    valor: 399.00,
    imagemUrl: imgId4
  },
  {
    id: 5,
    nome: "Pistola Missão Espacial com Projetor de Imagem + Som",
    valor: 49.00,
    imagemUrl: imgId5
 },
 {
   id: 6,
   nome: "Kit de Construção de Brinquedos Espaciais, 13 em 1",
   valor: 329.00,
   imagemUrl: imgId6
 },
 {
   id: 7,
   nome: "Brinquedo Réplica Ônibus Espacial Shuttle Nasa Columbia",
   valor: 399.00,
   imagemUrl: imgId7
 },
 {
  id: 8,
  nome: "Star Wars Millenium Falcon Nave Espacial com Miniaturas",
  valor: 649.00,
  imagemUrl: imgId8
},
{
  id: 9,
  nome: "Lego Marvel Nave Dos Guardiões Da Galáxia 1901 Peças",
  valor: 1299.00,
  imagemUrl: imgId9
}
]

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
                    <p>{product.nome}</p>
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
    </>
  );
}

export default App;
