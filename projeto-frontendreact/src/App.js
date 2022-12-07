import { createGlobalStyle } from "styled-components";
import React from "react";
import { useState, useEffect } from "react";
import LadoEsquerdo from './Componentes/Lado-Esquerdo/Lado-Esquerdo';
import LadoDireito from "./Componentes/Lado-Direito/Lado-Direiro";
import Header from "./Componentes/Header/Header"
import { Main, Section, Cards, ImagemProduto, MainContainer } from "./Styles.js";

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
    nome: "Brinquedos Espaciais para Crianças com 2 Astronautas, Ônibus e Rover",
    valor: 299.00, 
    imagemUrl: "https://images-americanas.b2w.io/produtos/4125742585/imagens/brinquedos-do-a-nibus-espacial-para-3-4-5-6-meninos-de-7-anos-lights-sounds-brinquedos-espaciais-para-criancas-3-5-com-2-astronautas-onibus-de-brinquedos-e-rover-espaconave-brinquedos-playsets-aniversario-meninas-da-pascoa-meninos/4125742585_1_xlarge.jpg"
  },
  {
     id: 2,
     nome: "KIT Astronautas Estação Espacial Missão Marte",
     valor: 469.00,
     imagemUrl: "https://images.tcdn.com.br/img/img_prod/860583/kit_astronautas_estacao_espacial_missao_marte_f00811_fun_61677_1_49e4ad47aff99e16cb9fcb40cc0b65a3.jpg"
  },
  {
    id: 3,
    nome: "Brinquedo Nave Cápsula Espacial Com Astronauta",
    valor: 59.00,
    imagemUrl: "https://a-static.mlcdn.com.br/800x560/brinquedo-nave-capsula-espacial-com-astronautas-fun-f00241-fun-divirta-se/toysteam/7898039605708/998b9441ea908365067046e821f56077.jpg"
  },
  {
    id: 4,
    nome: "Brinquedos Conjunto de Naves Espaciais, Foguete Foguete Astro Solar Playset para Crianças",
    valor: 399.00,
    imagemUrl: "https://imgs.extra.com.br/1515640460/1xg.jpg"
  },
  {
    id: 5,
    nome: "Pistola missão espacial com projetor de imagem + som",
    valor: 49.00,
    imagemUrl: "https://images-submarino.b2w.io/produtos/6268622599/imagens/kit-com-2-pistolas-missao-espacial-c-som-luz-projeta-imagem/6268622599_1_xlarge.jpg"
 },
 {
   id: 6,
   nome: "Kit de construção de brinquedos espaciais, 13 em 1",
   valor: 329.00,
   imagemUrl: "https://imgs.extra.com.br/1531097120/1xg.jpg"
 },
 {
   id: 7,
   nome: "Brinquedo Réplica Onibus Espacial Shuttle Nasa Espaço Astronauta Discovery OV-102 Columbia",
   valor: 399.00,
   imagemUrl: "https://static3.tcdn.com.br/img/img_prod/460977/brinquedo_replica_onibus_espacial_shuttle_nasa_espaco_astronauta_discovery_ov_102_columbia_luz_e_som_85625_1_8592469c22e375292fb875951900529f.jpeg"
 },
 {
  id: 8,
  nome: "Star Wars Millenium Falcon Nave Espacial com Miniaturas",
  valor: 649.00,
  imagemUrl: "https://a-static.mlcdn.com.br/800x560/star-wars-millenium-falcon-nave-espacial-com-miniaturas-sunny-brinquedos/toysteam/7899573634469/3b0aabe8bd3a04b8d025476fc260b9ec.jpeg"
},
{
  id: 9,
  nome: "Lego Marvel Nave Dos Guardiões Da Galáxia 1901 Peças",
  valor: 1299.00,
  imagemUrl: "https://http2.mlstatic.com/D_NQ_NP_760988-MLB50819508963_072022-O.webp"
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
        <LadoEsquerdo 
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
                <p>{product.nome}</p>
                <p>{product.valor}</p>
                <button onClick={() => onAdd(product)}>Comprar</button>
              </Cards>
            )})}
          </Section>
        </Main>
        <LadoDireito  
        cartItems={cartItems}
        setCartItems={setCartItems}
        />
      </MainContainer>
    </>
  );
}

export default App;
