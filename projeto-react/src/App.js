import Header from './components/Header';
import Main from './components/Main';
import Carrinho from './components/Carrinho';
import data from './data';
import { useState } from 'react';
import Footer from './components/Footer';

function App(props) {
  const { produtos } = data;
  const [itens, setItens] = useState([]);
  const [listaProdutos, setListaProdutos] = useState(produtos);

  const onAdd = (produto) => {
    const confere = itens.find(x => x.id === produto.id);
    if(confere) {
      setItens(itens.map(x => x.id === produto.id ? {...confere, quantidade: confere.quantidade +1} : x
        ));
    } else{
      setItens([...itens, {...produto, quantidade: 1}]);
    }
  };

  const onRemove = (produto) => {
    const confere = itens.find((x) => x.id === produto.id);
    if(confere.quantidade === 1) {
      setItens(itens.filter((x) => x.id !== produto.id));
    } else{
      setItens(itens.map(x => x.id === produto.id ? {...confere, quantidade: confere.quantidade -1} : x
        ));
    }
  }

  return (
    <div className="App">
      <Header contaItens={itens.length}></Header>
      <div className='row'>
      <Main itens={listaProdutos} setItens={setListaProdutos} onAdd={onAdd} produtos={listaProdutos}></Main>
      <Carrinho onAdd={onAdd} onRemove={onRemove} itens={itens}></Carrinho>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default App;