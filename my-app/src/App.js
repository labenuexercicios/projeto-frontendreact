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
  const [cart, setCart] = useState([{
    name: 'ALMOFADA GALÁXIA ROXA',
    id: 1,
    category: 'Almofadas',
    rate: 5,
    price: 12.90,
    stock: 20,
    description: 'Capa de almofada 45x45 cm com ziper embutido',
}])

  // const renderArray = ProductList
  // .map((item, id) => {
  //   return <ProductCard key={id} item={item} addToCart={addToCart}/>
  // })

  const renderCart = cart
  .map((item, id) => {
    return <Items key={id} item={item}/>
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

  
  return (
    <div>
      <Header searchFilter={searchFilter} 
      setSearchFilter={setSearchFilter}/>

      <AppStyled>
        
        <Filters 
        minFilter={minFilter} 
        setMinFilter={setMinFilter} 
        maxFilter={maxFilter} 
        setMaxFilter={setMaxFilter}/>

        <Home 
        addToCart={addToCart} 
        ProductList={ProductList} /> 

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
