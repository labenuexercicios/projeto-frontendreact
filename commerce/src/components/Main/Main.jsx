import React, {useState}from 'react'
import produtos from '../../data/products'
import NavSearch from '../NavSearch/NavSearch'
import Products from '../Products/Products'
import Cart from '../Cart/Cart'
import { MainContainer } from './style'
// import { useForm } from '../../functions/useForm'

export default function Main(props) {
  const [carrinho, setCarrinho] = useState([])
  const [nome, setNome] = useState('');
  const [vmin, setVmin] = useState('');
  const [vmax, setVmax] = useState(Infinity);

  function handleName(e) {
    setNome(e.target.value)
  }

  function handleVmin(e) {
    setVmin(e.target.value)
  }

  function handleVmax(e) {
    setVmax(e.target.value)
  }

  function addProd (e) {
    setCarrinho([...carrinho, produtos[e]])
    console.log(carrinho)
  }



  return(
    <MainContainer>
      <NavSearch 
      nome={nome} handleName={handleName}
      vmin={vmin} handleVmin={handleVmin}
      vmax={vmax} handleVmax={handleVmax} />
      <Products 
      nome={nome}
      vmin={vmin}
      vmax={vmax}
      produtos={produtos} addProd={addProd}/>
      <Cart carrinho={carrinho} />
    </MainContainer>
  )
}