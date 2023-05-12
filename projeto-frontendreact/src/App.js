import { GlobalStyle } from './GlobalStyle';
import Header from './componentes/Header/Header';
import ListaDeProdutos from './componentes/ListaDeProdutos/ListaDeProdutos';

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Header/>
      <ListaDeProdutos/>
    </div>
  );
}

export default App;
