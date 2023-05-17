import './style.css';
import Carrinho from './components/Carrinho/Carrinho';
import Filtro from './components/Filtro/Filtro';
// import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { results } from './assents/productsList';

function App() {
  return (
    <div className='container'>
      {/* <Header /> */}
      <Filtro />
      <Home
        results={results} />
      <Carrinho />
    </div >
  );
}

export default App;
