import Headers from './components/Header';
import Main from './components/Main';
import Compras from './components/Compras';
import { data } from './data';
import { useState } from 'react';
import Footer from './components/Footer';
function App() {
  const {products}=data;
  const [cartItems,setCartItems]=useState([]);
  const [query,setQuery] = useState("")
  const [orderParam,setOrderParam] = useState("")
  const handleInputQuery =(event) =>setQuery(event.target.value)
  const handleInputOrderParam =(event) =>setOrderParam(event.target.value)


  const onAdd = (product)=>{
    const exist= cartItems.find(x => x.id === product.id)
    if(exist){
      setCartItems(cartItems.map(x=> x.id ===product.id ? {...exist, qty:exist.qty + 1} : x ));
    }else{
      setCartItems([...cartItems,{...product, qty: 1}])
    }
  };
  const onRemove =(product)=>{
    const exist = cartItems.find((x) => x.id === product.id);
    if(exist.qty === 1 ){
      setCartItems(cartItems.filter((x)=>x.id !== product.id))
    }else{
      setCartItems(cartItems.map(x=> x.id ===product.id ? {...exist, qty:exist.qty - 1} : x ));
    }
  }

 
  return (
    <div className="App">
      <Headers counteCartItems={cartItems.length}></Headers>
      <div className='row'>
        <Main onAdd={onAdd} products={products} ></Main>
        <Compras
        handleInputQuery={handleInputQuery}
        handleInputOrderParam={handleInputOrderParam}
        query={query}
        orderParam={orderParam}
        onAdd={onAdd}
        onRemove={onRemove}
        cartItems={cartItems} ></Compras>

      </div>
      <Footer/>
    </div>
   
  );
}

export default App;
