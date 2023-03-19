import Nave from "../Componentes/Image/Nave.png"
import Arma from "../Componentes/Image/Arma.png"
import Ufogin from "../Componentes/Image/Ufogin.png"
import Lego from "../Componentes/Image/Lego.png"
import Astronauta from"../Componentes/Image/Astronauta.png"
import Astronomia from "../Componentes/Image/Astronomia.png"
import Discovery from "../Componentes/Image/Discovery.png"
import Arma2 from "../Componentes/Image/Arma2.png"
import { ImageProducts } from "./styled";


export const Products = [
  {
    id: 1,
    name: "Nave Espacial Fun",
    value: 40,
    imageUrl: <ImageProducts src={Nave} />,
    type: "SellItem",
    quantity: 1
    
  },

  {
    id: 2,
    name: "Arma Espacial DM",
    value: 50,
    imageUrl: <ImageProducts src={Arma} />,
    type: "SellItem",
    quantity: 1
  },

  {
    id: 3,
    name: "Ufogin",
    value: 75.00,
    imageUrl: <ImageProducts src={Ufogin} />,
    type: "SellItem",
    quantity: 1
  },

  {
    id: 4,
    name: "Lego Espacial",
    value: 150.00,
    imageUrl: <ImageProducts src={Lego} />,
    type: "SellItem",
    quantity: 1
  },
  {
    id: 5,
    name: "Boneco Astronauta",
    value: 70.00,
    imageUrl: <ImageProducts src={Astronauta} />,
    type: "SellItem",
    quantity: 1
  },

  {
    id: 6,
    name: "Jogo Astronomia",
    value: 170.00,
    imageUrl: <ImageProducts src={Astronomia} />,
    type: "SellItem",
    quantity: 1
  },
  {
    id: 7,
    name: "Quebra-Cabeça",
    value: 150.00,
    imageUrl: <ImageProducts src={Discovery} />,
    type: "SellItem",
    quantity: 1
  },

  {
    id: 8,
    name: "Arma Espacial IM",
    value: 55.00,
    imageUrl: <ImageProducts src={Arma2} />,
    type: "SellItem",
    quantity: 1
  },





];