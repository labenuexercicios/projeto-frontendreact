import Cart from './components/Cart/Cart';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import data from './data';
import { useEffect, useState} from 'react';
import Filters from './components/Filters/Filters';



function App() {

  const [query, setQuery] = useState("")
  const [minPrice, setMinPrice] = useState(-Infinity)
  const [maxPrice, setMaxPrice] = useState(Infinity)
  const [sortingOrder, setSortingOrder] = useState("Crescente")
   
  const [cartItems, setCartItems] = useState([])
  const {products} = data
  
  const addProduct = (product) => {
    const exists = cartItems.find((productCart) => productCart.id === product.id)
    
    if(exists) {
      const newCartItems = cartItems.map((productCart) => 
      productCart.id === product.id ? {...exists, qty: exists.qty + 1 } : productCart)
      setCartItems(newCartItems)
     // localStorage.setItem('cartItems', JSON.stringify('newCarItems'))
    } else {
      const newCartItems = [...cartItems, {...product, qty: 1 }]
      setCartItems(newCartItems)
     // localStorage.setItem('cartItems', JSON.stringify('newCarItems'))
    }
  }
  const removeProduct =(product) => {
    const exists = cartItems.find((productCart) => productCart.id === product.id)

    if (exists.qty === 1) {
      const newCartItems = cartItems.filter((productCart) => 
      productCart.id !== product.id)
      setCartItems(newCartItems)
     // localStorage.setItem('cartItems', JSON.stringify('newCarItems'))
    } else {
      const newCartItems = cartItems.map((productCart) =>
      productCart.id === product.id ? { ...exists, qty: exists.qty -1 } : productCart)
      setCartItems(newCartItems)
     // localStorage.setItem('cartItems', JSON.stringify('newCarItems'))
    }
  }

  
  
  // useEffect(() => {
  //   setCartItems(localStorage.getItem('cartItems')
  //   ? JSON.parse(localStorage.getItem('cartItems'))
  //   :[]
  //   )
  // }, [])
  
  return (
    
    <div>
      <Header countItems={cartItems.length}/>
      <div class='row'>
        <Filters 
        query={query}
        setQuery={setQuery}
        minPrice={minPrice}
        setMinPrice={setMinPrice}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
        />
        
        <Main
        products={products}
        cartItems={cartItems}  
        addProduct={addProduct} 
        removeProduct={removeProduct}
        query={query}
        minPrice={minPrice}
        maxPrice={maxPrice}
        sortingOrder={sortingOrder}
        setSortingOrder={setSortingOrder}
        />
        
        <Cart 
        cartItems={cartItems}  
        addProduct={addProduct} 
        removeProduct={removeProduct}
        />
     
      </div>
    </div>
    
  );
}

export default App;
