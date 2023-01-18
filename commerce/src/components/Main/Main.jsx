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

  let soma = 0;

  function addProd(prod) {
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
    }else {
      const novoCarrinho = carrinho.filter(item => item.id !== prod.id)
      setCarrinho(novoCarrinho)
    }
    
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
      produtos={produtos} addProd={addProd} />
      <Cart carrinho={carrinho} removeProd={removeProd} />
    </MainContainer>
  )
}