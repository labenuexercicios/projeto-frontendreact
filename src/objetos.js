import capsulaapolo from './imagem/capsulaapolo.jpg'
import capsularussa from './imagem/capsulacosmonauta.jpeg'
import capsulaspacex from './imagem/capsulaspacex.jpg'
import cosmonauta from './imagem/Cosmonauta.jpg'
import onibusespacial from './imagem/onibusespacial.jpg'
import robolunar from './imagem/robolunar.jpg'

const todosProdutos = [
  {
  id: Math.ceil(Math.random() * 100000),
  produto: "Capsula Espacial URSS",
  descricao: "Capsula vazia da Vostok 1, onde o Cosmonauta Yuri Gagárin fez sua viagem espacial em 1961.",
  preco: 500000,
  imagem: capsularussa
},
{
  id: Math.ceil(Math.random() * 100000),  
  produto: "Capsula Espacial Projeto Apollo",
  descricao: "Esta capsula espacial foi utilizada no Projeto Apollo 11, comandada pelo Astronauta Buzz Audrin.",
  preco: 700000,
  imagem: capsulaapolo
},
{
  id: Math.ceil(Math.random() * 100000),  
  produto: "Capsula SpaceX",
  descricao: "Capsula espacial da empresa SpaceX. Moderna, tecnológica e com um design impressionante.",
  preco: 1000000,
  imagem: capsulaspacex},
{
  id: Math.ceil(Math.random() * 100000),  
  produto: "Ônibus Espacial Columbia",
  descricao: "Últmo ônibus espacial a realizar uma viagem para fora do plante Terra.",
  preco: 5000000,
  imagem: onibusespacial
},
{
  id: Math.ceil(Math.random() * 100000),  
  produto: "Robô lunar Spirit",
  descricao: "Primeiro robô remoto à investigar nosso satélite natural.",
  preco: 130000,
  imagem: robolunar
},
{
  id: Math.ceil(Math.random() * 100000),  
  produto: "Traje Espacial de Cosmonauta",
  descricao: "Traje espacial utilizado pelos Cosmonautas russos na década de 1960",
  preco: 18750,
  imagem: cosmonauta
},
]

export default todosProdutos