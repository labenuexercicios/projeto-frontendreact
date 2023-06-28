import React, { useState } from 'react';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer';
import Filters from './Components/Filters/Filters'
import Home from './Components/ProductList/Home/Home'
import Cart from './Components/ShoppingCart/Cart/Cart'
import { AppStyled } from './App.styled'
import ProductList from './assets/ProductList';
import ProductCard from './Components/ProductList/Home/ProductCard/ProductCard';
import Items from './Components/ShoppingCart/Cart/Items/Items';


function App() {

  const [minFilter, setMinFilter] = useState('')
  const [maxFilter, setMaxFilter] = useState('')
  const [searchFilter, setSearchFilter] = useState('')
  const [amount, setAmount] = useState('')
  const [valorMin, setValorMin] = useState('')
  const [valorMax, setValorMax] = useState('')
  // const [listaProducts, setListaProducts] = useState(listaProducts)
  
  
  
  const [cart, setCart] = useState([{
    name: 'ALMOFADA GALÁXIA ROXA',
    id: 1,
    category: 'Almofadas',
    rate: 5,
    price: 12.90,
    stock: 20,
    description: 'Capa de almofada 45x45 cm com ziper embutido',
}])

  
  const handleValorMin = (event) => {
    setValorMin(event.target.value);
  }

  const handleValorMax = (event) => {
    setValorMax(event.target.value);
  }


  const filteredProducts = ProductList.filter((item) => {
    if(item.price >= valorMin && item.price <= valorMax){
      return <ProductCard/>
    } else if (valorMin === '' && valorMax === ''){
      return item
    }
  })


  const renderCart = cart
  .map((item, id) => {
    return <Items key={id} item={item} removerItem={removerItem}/>
  })



  const addToCart = (produto) => {
    const newProduct = renderCart
    .find((item) => produto.id === item.id)

    if(newProduct === undefined) {
      setCart([...cart, {...produto, amount: 1}])
    } else {
      const newCart = cart.map((item) => {
        if(produto.id === item.id){
          return{...newProduct, amount:newProduct.amount + 1}
        } else {
          return item
        }
      })

      setCart(newCart)
    }
  }

  const removerItem = () => {

  }


  
  return (
    <div>
      <Header searchFilter={searchFilter} 
      setSearchFilter={setSearchFilter}/>

      <AppStyled>
        
        <Filters 
        minFilter={minFilter} 
        setMinFilter={setMinFilter} 
        maxFilter={maxFilter} 
        setMaxFilter={setMaxFilter}
        ProductList={ProductList}
        handleValorMax={handleValorMax}
        handleValorMin={handleValorMin}
        valorMin={valorMin}
        valorMax={valorMax} />

        <Home 
        addToCart={addToCart} 
        ProductList={ProductList}
        filteredProducts={filteredProducts}
        /> 

        <Cart 
        renderCart={renderCart} 
        cart={cart} 
        setCart={setCart} 
        amount={amount} 
        setAmount={setAmount}/>

      </AppStyled>
      
      <Footer />
    </div>
  );
}

export default App;
