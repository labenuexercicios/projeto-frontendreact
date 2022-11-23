import imagem1 from "./imagem/img-1.png"
import imagem2 from "./imagem/img-2.png"
import imagem3 from "./imagem/img-3.png"
import imagem4 from "./imagem/img-5.png"
import imagem5 from "./imagem/img-6.png"
import imagem6 from "./imagem/img-9.png"
import imagem7 from "./imagem/img-10.png"

const TodosBrinquedos = [
  {
    id: 1,
    rendImagem: Math.ceil(Math.random() * 100000),
    produto:"Ônibus Espacial ",
    preco: 75,
    imagem: imagem1,
},
{
  id:2,
  rendImagem: Math.ceil(Math.random() * 100000),
  produto:"Brinquedo Infantil Galáctico",
  preco: 95,
  imagem: imagem2,
},
{
  id: 3,
  rendImagem: Math.ceil(Math.random() * 100000),
  produto:"Avião Astronautas",
  preco: 110,
  imagem: imagem3,
},
{
  id: 4,
  rendImagem: Math.ceil(Math.random() * 100000),
  produto:"Estação Espacial" ,
  preco: 109,
  imagem: imagem4,
},
{
  id:5,
  rendImagem: Math.ceil(Math.random() * 100000),
  produto:"Ônibus Espacial " ,
  preco: 140,
  imagem: imagem5,
},
{
  id:6,
  rendImagem: Math.ceil(Math.random() * 100000),
  produto:"Foguet Espacial",
  preco: 300,
  imagem: imagem6,
},
{
  id: 7,
  rendImagem: Math.ceil(Math.random() * 100000),
  produto:"Nave espacial para montar",
  preco: 90,
  imagem: imagem7,
},
]

export default TodosBrinquedos