import { GlobalStyle } from './GlobalStyle';
import Header from './componentes/Header/Header';
import ListaDeProdutos from './componentes/ListaDeProdutos/ListaDeProdutos';
import { results } from './data/data'

function App() {
  console.log(results)

  return (
    <div className="App">
      <GlobalStyle/>
      <Header/>
      <ListaDeProdutos results={results}/>
    </div>
  );
}

export default App;
