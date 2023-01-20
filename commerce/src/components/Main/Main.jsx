import React, {useEffect, useState}from 'react'
import produtos from '../../data/products'
import NavSearch from '../NavSearch/NavSearch'
import Products from '../Products/Products'
import Cart from '../Cart/Cart'
import { MainContainer } from './style'
// import { useForm } from '../../functions/useForm'

export default function Main() {

  const [carrinho, setCarrinho] = useState(localStorage.getItem('Carrinho') === null ? [] : JSON.parse(localStorage.getItem('Carrinho')))
  const [nome, setNome] = useState('');
  const [vmin, setVmin] = useState('');
  const [vmax, setVmax] = useState(Infinity);
  const [order, setOrder] = useState('C')

  function handleName(e) {setNome(e.target.value)}
  function handleVmin(e) {setVmin(e.target.value)}
  function handleVmax(e) {setVmax(e.target.value)}
  function handleOrder(e) {setOrder(e.target.value)}

  useEffect(() => {saveCart(carrinho)},[carrinho])
  // useEffect(() => {loadCart()},[])
  
  function addProd(prod) {
    console.log(prod)
    const newProduct = carrinho.find(item => item.id === prod.id)
    if(newProduct === undefined) {
      setCarrinho([...carrinho, {...prod, amount: 1}])
    }else {
      const novoCarrinho = carrinho.map(item => {
        if(item.id === prod.id) {
          return {...newProduct, amount: newProduct.amount + 1}
        } else {
          return item
        }
      })
      setCarrinho(novoCarrinho)
    }
  }

  function removeProd(prod) {
    const productToRemove = carrinho.find(item => item.id === prod.id)
    if (productToRemove.amount > 1) {
      const novoCarrinho = carrinho.map(item => {
        if(item.id === prod.id) {
          return {...productToRemove, amount: productToRemove.amount - 1}
        } else {
          return item
        }
      })
      setCarrinho(novoCarrinho)
    }else {
      const novoCarrinho = carrinho.filter(item => item.id !== prod.id)
      setCarrinho(novoCarrinho)
    }
  }

  function saveCart(carrinho) {
    localStorage.setItem('Carrinho', JSON.stringify(carrinho))
  }

  function loadCart() {
    setCarrinho(JSON.parse(localStorage.getItem('Carrinho')))

    // if(localStorage.getItem('Carrinho') === null) {
    //   setCarrinho([])
    // } else {
    //   setCarrinho(JSON.parse(localStorage.getItem('Carrinho')))
    // }
  }

  return(
    <MainContainer>
      <NavSearch 
      nome={nome} handleName={handleName}
      vmin={vmin} handleVmin={handleVmin}
      vmax={vmax} handleVmax={handleVmax}
      order={order} handleOrder={handleOrder} />
      <Products 
      nome={nome}
      vmin={vmin}
      vmax={vmax}
      order={order}
      produtos={produtos} addProd={addProd} />
      <Cart carrinho={carrinho} removeProd={removeProd} />
    </MainContainer>
  )
}