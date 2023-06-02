import React from 'react'
import Filters from './Components/Filters/Filters'
import Home from './Components/ProductList/Home/Home.jsx'
import ShoppingCart from './Components/ShoppingCart/ShoppingCart'
import { produtos } from './assets/ProductList'
import { MainContainer } from './AppStyle'

function App() {
  // const [minFilter, setMinFilter] = React.useState('')
  // const [maxFilter, setMaxFilter] = React.useState('')
  // const [searchFilter, setSearchFilter] = React.useState('')
  // const [cart, setCart] = React.useState('')
  // const [amount, setAmount] = React.useState('')
  const [formData, setFormData] = React.useState(
    {
      minFilter: 0,
      maxFilter: 0,
      searchFilter: '',
      cart: '',
      amount: '',

    })
  
  function handleChange(e) {
    const {value, name, type, checked} = e.target

    if (type === 'number' && value < 0) {
      return 
    }

    setFormData(prevData => {
      
      return {
        ...prevData,
        [name]: type === 'checkbox' ? checked : value
      }
    })
  }


  return (
    <MainContainer>
      <Filters 
        handleChange={handleChange}
        data={formData}
      />
      <Home 
        handleChange={handleChange}  
        data={formData}
        produtos={produtos}
      />
      <ShoppingCart 
        handleChange={handleChange}
        data={formData}
      />
    </MainContainer>
  )
}

export default App
