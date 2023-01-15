import { Header } from './Components/Header/Header';
import { Homepage } from './Components/Homepage/Homepage';
import { GlobalStyle } from './GlobalStyle';
import aerolito1 from './img/aerolitoa.jpeg'

export default function App(){
  return(
    <div>
    <GlobalStyle/>
    <Header/>
    <Homepage aerolit1={aerolito1}/>
    </div>
  )
}

