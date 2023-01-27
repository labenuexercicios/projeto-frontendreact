import React, { useState } from 'react';
import './components/Style.css';
import Car from './components/Car';
import Header from './components/Header';
import Main from './components/Main';
import data from './components/data';

function App() {
  const {products} = data;
  const [carItems, setCarItems] = useState([]);
  const onAdd = (product) => {
    const exist = carItems.find(x => x.id === product.id);
    if(exist) {
      setCarItems(carItems.map(x => x.id === product.id ? {...exist, qty: exist.qty +1} : x )
);
} else{
  setCarItems([...carItems, {...product, qty: 1}]);

}
  };
  const onRemove = (product) => {
    const exist = carItems.find((x) => x.id === product.id);
    if(exist.qty === 1) {
      setCarItems(carItems.filter((x) => x.id !== product.id));
    } else {
      setCarItems(carItems.map(x => x.id === product.id ? {...exist, qty: exist.qty -1} : x ));
    }
  }


  return (
    <div className="App">
      <Header></Header>
      <div className='row'>
        <Main onAdd={onAdd} products={products}></Main>
        <Car onAdd={onAdd} onRemove={onRemove} carItems={carItems}></Car>
      </div>
    </div>
  );
}

export default App;
