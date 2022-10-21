import styled, { createGlobalStyle } from "styled-components";
import logo from './logo.svg';
import React, {useState} from 'react'
import './App.css';
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
  const [produtos, setProdutos] = useState(
    [ 
      {
        id: 0,
        nome: "Camisa Luas de Saturno",
        preco: 49.99,
        imagemUrl: "https://images.tcdn.com.br/img/img_prod/697287/camiseta_planeta_saturno_sistema_solar_espaco_7241_1_20191112120529.jpg",
      },
      {
        id: 1,
        nome: "Camisa Sistema Solar",
        preco: 49.99,
        imagemUrl: "https://a-static.mlcdn.com.br/800x560/camiseta-planetas-camisa-espaco-galaxias-darkwood/darkwoodshop2/11228651084/98261ab296824e6d69a6e7f6b0c5ee7d.jpeg",
      }
    ]);

  return (
    <>
    <GlobalStyle />
    <Header />
    <Container>
      <AsideEsquerda />
      <DivCentro> 
        <Centro produto = {produtos[0]}/>
        <Centro produto = {produtos[1]}/>
      </DivCentro>
      <AsideDireita /> 
    </Container>
    </>
  );
}

export default App;
