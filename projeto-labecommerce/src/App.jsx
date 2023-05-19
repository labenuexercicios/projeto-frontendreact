import Filters from './Components/Filters/Filters'
import Home from './Components/ProductList/Home/Home.jsx'
import ShoppingCart from './Components/ShoppingCart/ShoppingCart'
import styled from 'styled-components'
import { produtos } from './assets/ProductList'

function App() {
  const MainContainer = styled.div`
    border: 1px solid red;
    display: flex;
    height: 100vh;
  `

  return (
    <MainContainer>
      <Filters />
      <Home produtos={produtos}/>
      <ShoppingCart />
    </MainContainer>
  )
}

export default App
