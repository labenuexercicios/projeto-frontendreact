import styled, { createGlobalStyle } from "styled-components";
import logo from './logo.svg';
import React, {useState} from 'react'
import './App.css';
import fundoGalaxia from './midia-geral/panorama-cena-da-galaxia-do-espaco-com-planetas-estrelas-e-galaxias-modelo-de-banner-muitas-nebulosas-e-galaxias-no-espaco-muitos-ano.jpg'
import { Header } from "./components/Header/Header";
import { AsideEsquerda } from "./components/AsideEsquerda/AsideEsquerda";
import { Centro } from "./components/Centro/Centro";
import { AsideDireita } from "./components/AsideDireita/AsideDireita";


const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Container  = styled.section`
display: grid;
height: 100vh;
width: 100vw;
grid-template-columns: 1fr 3fr 1fr;
margin-top: 80px;   
`

const DivCentro = styled.div
`
display: flex;
flex-wrap: wrap;
`


function App() {
///Produtos///////////////
  let [produtos, setProdutos] = useState(
    [ 
      {
        id: 0,
        nome: "Camisa Luas de Saturno",
        preco: 49.99,
        imagemUrl: "https://images.tcdn.com.br/img/img_prod/697287/camiseta_planeta_saturno_sistema_solar_espaco_7241_1_20191112120529.jpg",
        backColor: "white",
        display: ""
      },
      {
        id: 1,
        nome: "Camisa Sistema Solar",
        preco: 49.99,
        imagemUrl: "https://a-static.mlcdn.com.br/800x560/camiseta-planetas-camisa-espaco-galaxias-darkwood/darkwoodshop2/11228651084/98261ab296824e6d69a6e7f6b0c5ee7d.jpeg",
        backColor: "white",
        display: ""
      },
      {
        id: 2,
        nome: "Boné das galáxias",
        preco: 29.99,
        imagemUrl:"https://img.ltwebstatic.com/images3_pi/2022/03/09/164681617300b42e8ad6c8eb2745c535272558b729.webp",
        backColor: "rgb(233, 206, 159);",
        display: ""
      }
    ]);

    //Funçoes
    let [apaga, setApaga] = useState(false) //decide se o item vai aparecer na pesquisa ou não 
    const [string, setString] = useState("")//recebe o texto pesquisado
    function pesquisar(textoDigitado)
    {
      let alertNaoEncontrado = 0;
      if(textoDigitado === "")
      {
        for(let i=0; i<produtos.length; i++) 
        {
          produtos[i].display = "";
        }
      }
      else
      {
      for(let i=0; i<produtos.length; i++) 
      {
        produtos[i].display = "display: none;";
      }
      for(let i=0; i<produtos.length; i++) 
      {    
          if(produtos[i].nome.slice(produtos[i].length, textoDigitado.length).toLowerCase() === textoDigitado.toLowerCase())  //.toLowerCase().trim()
          {
              console.log("o resultado da pesquisa foi: ", produtos[i].id);
              produtos[i].display = "";
              //return resultadoNaTela(produtos[i].id)
              // for(let j=0; j<produtos[i].id + 1; j++)
              // {
              //     if(produtos[j].id === produtos[i].id)
              //     {
              //       console.log("teste", produtos[j].nome)
              //     }
              // }
              //alertNaoEncontrado = 1;
          }
      }
      if(alertNaoEncontrado === 0)
      {
        //alert("ALERT item não encontrado")
      }
      //return alertNaoEncontrado = 0;
      }
    }

  return (
    <>  
    <GlobalStyle />
    <Header />
    <Container style={{ backgroundImage: `url(${fundoGalaxia})` }}>
      <AsideEsquerda
      string = {string}
      setString = {setString} 
      pesquisar = {pesquisar}/>
      <DivCentro >  
        <Centro produto = {produtos[0]}/>
                {/* display = {display} */}
                {/* apaga = {apaga}
                setApaga = {setApaga} */}

        <Centro produto = {produtos[1]}/>
                {/* display = {display}/> */}
                {/* apaga = {apaga}
                setApaga = {setApaga} */}

        <Centro produto = {produtos[2]}/>
                {/* display = {display}/> */}
                {/* apaga = {apaga}
                setApaga = {setApaga} */}

      </DivCentro>
      <AsideDireita /> 
    </Container>
    </>
  );
}

export default App;
