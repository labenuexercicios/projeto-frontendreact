import { useState } from 'react';
import { GlobalStyle } from './GlobalStyle';
import Header from './componentes/Header/Header';
import ListaDeProdutos from './componentes/ListaDeProdutos/ListaDeProdutos';
import { results } from './data/data'

function App() {

  const [produto, setProdutos] = useState(results)

  const addProduto = () => {
    const novoProduto = {
      id: 20,
      title: "DANVOUY Womens T Shirt Casual Cotton Short",
      price: 12.99,
      description:
        "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
      category: "women's clothing",
      image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
      rating: { rate: 3.6, count: 145 },
    }

    const novoProdutoLista = [...produto, novoProduto]
    setProdutos(novoProdutoLista)
  }

  return (
    <div className="App">
      <GlobalStyle/>
      <Header/>
      <ListaDeProdutos produto={produto}/>
    </div>
  );
}

export default App;
