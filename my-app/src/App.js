import React, { useEffect, useState } from 'react';
import Header from './Components/Header/Header'
import Filters from './Components/Filters/Filters'
import Home from './Components/ProductList/Home/Home'
import Cart from './Components/ShoppingCart/Cart/Cart'
import { AppStyled, Fundo, Geral } from './App.styled'
import ProductList from './assets/ProductList';
import ProductCard from './Components/ProductList/Home/ProductCard/ProductCard';

function App() {

  const [minFilter, setMinFilter] = useState('')
  const [maxFilter, setMaxFilter] = useState('')
  const [searchFilter, setSearchFilter] = useState('')
  const [amount, setAmount] = useState(0)
  const [valorMin, setValorMin] = useState('')
  const [valorMax, setValorMax] = useState('')
  const [cart, setCart] = useState([])
  const [ordination , setOrdination] = useState ('')

  // Filtra produtos para renderizar no card
  const filteredProducts = ProductList
  .filter((item) => {
    if(valorMax === ''){
      if(item.price >= valorMin){
        return <ProductCard/>
      }
      
    } else if (valorMin === ''){
      if(item.price <= valorMax){
        return <ProductCard/>
      }
      
    } else if (item.price >= valorMin && item.price <= valorMax){
      return <ProductCard/>
    
    } else {
      return ('')
    }
  })
  .filter((item) => {
    if(item.name.includes(searchFilter.toUpperCase())){
      return <ProductCard/>
    }
  })
  .sort((a,b) => ordination === 'Menor preço' && a.price > b.price ? 1 : -1)
  .sort((a,b) => ordination === 'Maior preço' && a.price > b.price ? -1 : 1)

  // Calcula quantidade de itens renderizados em tela
  const quantidade = filteredProducts.length

  // Função adicionar ao carrinho
  const addToCart = (produto) => {
    const newProduct = cart
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

  // Mantém carrinho salvo caso atualize a página
  const saveLocalStorage = () => {
    const cartString = JSON.stringify(cart)
    localStorage.setItem('carrinho', cartString)
  }
  
  const getItemsLocalStorage = () => {
    const cartParse = JSON.parse(localStorage.getItem('carrinho'))

    if(cartParse){
      setCart(cartParse)
    }
  }

  useEffect(() => {
    getItemsLocalStorage()
  }, [])

  useEffect(() => {
    cart.length && saveLocalStorage()
  }, [cart])

  
  return (
    <Fundo>
      <Header
        searchFilter={searchFilter}
        setSearchFilter={setSearchFilter}
        filteredProducts={filteredProducts}/>
      <AppStyled>
        <Filters
          minFilter={minFilter}
          setMinFilter={setMinFilter}
          maxFilter={maxFilter}
          setMaxFilter={setMaxFilter}
          valorMin={valorMin}
          valorMax={valorMax}
          setValorMin={setValorMin}
          setValorMax={setValorMax} />
        <Home
          addToCart={addToCart}
          ProductList={ProductList}
          filteredProducts={filteredProducts}
          setOrdination={setOrdination}
          ordination={ordination}
          quantidade={quantidade}/>
        <Cart
          cart={cart}
          setCart={setCart}
          amount={amount}
          setAmount={setAmount}/>
      </AppStyled>
    </Fundo>
  
  );
}

export default App;
