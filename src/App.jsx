import { useState } from 'react';
import {GlobalContext} from './contexts/GlobalContext';
import endurance from './assets/endurance.jpeg';
import axiom from './assets/axiom.jpeg';
import jupiter2 from './assets/jupiter2.png';
import milano from './assets/milano.jpg';
import orion from './assets/orion.jpeg';
import rickmorty from './assets/rick-morty.jpeg';
import Router from './routes/Router';


function App() {
  const [carrinho, setCarrinho] = useState([]);
  const [contador, setContador] = useState(0);
  const [componentesCarrinho, setComponentesCarrinho] = useState({divCarrinho: false, badge: false})
  const [filtro, setFiltro] = useState({filtraNome: "", filtraValorMaximo: "", filtraValorMinimo: "", ordenar:""})

  const viagensEspaciais = [
    {
      id: 1,
      destino: 'Marte',
      descricao: 'Aproveite uma pernoite no planeta vermelho. Voe de classe executiva e conheça as principais áreas de Marte. Valor por pessoa.',
      nave: 'Endurance',
      valor: 4500,
      img: endurance
    },
    {
      id: 2,
      destino: 'Jupiter',
      descricao: 'Viaje até Júpiter e visite as principais luas, com destaque para a lua Europa. Voe de primeira classe com alimentos inclusos. Valor por adulto, crianças menores de 12 anos inclusas no pacote.',
      nave: 'Jupiter-2',
      valor: 7000,
      img: jupiter2
    },
    {
      id: 3,
      destino: 'Venus',
      descricao: 'Conheça Vênus com o melhor custo benefício. Voe na classe Econômica e desfrute de paisagens cênicas. Valor por pessoa.',
      nave: 'Axiom',
      valor: 6500,
      img: axiom
    },
    {
      id: 4,
      destino: 'Proxima b',
      descricao: 'Uma viagem de ida e volta na primeira classe para a galáxia Proxima Centauri, com parada em Proxima b, um potencial planeta para a colonização humana. Valor por pessoa.',
      nave: 'Orion',
      valor: 9000,
      img: orion
    },
    {
      id: 5,
      destino: 'Lua', 
      descricao: 'Passe duas noites em uma das naves mais luxuosas. Na classe Econômica, você aproveita as melhores visões da nossa Lua, visitando as crateras mais famosas. Valor por pessoa.',
      nave: 'Milano',
      valor: 3500,
      img: milano
    },
    {
      id: 6,
      destino: 'Tour Espacial', 
      descricao: 'Viaje pela Via Láctea e conheça as principais atrações, do Sol até Plutão, em um tour privado para duas pessoas. Valor por dupla, com refeições e pacote de bebidas inclusos.',
      nave: 'Nave Rick and Morty',
      valor: 10000,
      img: rickmorty
    }
]

  const context = {
    viagensEspaciais, 
    carrinho, 
    setCarrinho,
    contador, 
    setContador,
    filtro,
    setFiltro,
    componentesCarrinho, 
    setComponentesCarrinho
  }

  return (
    <GlobalContext.Provider value={context}>
      <Router/>
    </GlobalContext.Provider>
  )
}

export default App
