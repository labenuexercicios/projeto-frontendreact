 
import Header from './componentes/Header';
import Main from './componentes/Main';
import Carrinho from './componentes/Carrinho';
import data from './data';
import { useState } from 'react';
function App() {

  const [filtro, setFiltro]= useState('')

  const [pesquisaProdutos, setPesquisaProdutos]= useState("")
   const [pesquisa, setPesquisa]= useState("")
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    

    <div className="App">
      <Header countCartItems={cartItems.length}/>


  
      <div className="row">
        <Main products={products} onAdd={onAdd} pesquisa={pesquisa} filtro={filtro} ></Main>
        <Carrinho
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
        ></Carrinho>
      </div>
    </div>
    
  );
}

export default App;
