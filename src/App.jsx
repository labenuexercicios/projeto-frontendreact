import { GlobalStyle } from './GlobalStyle'
import Header from './components/header/Header'
import Main from './components/main/Main' 
import Footer from './components/footer/Footer'
import categoriesDB from "../data/categories.json";
import productsDB from "../data/space-products.json";

function App() {
  return (    
    <div className="App"  >
      <GlobalStyle/> 
      <Header categories={ categoriesDB.categories }/>
      <Main categories={ categoriesDB.categories } products={ productsDB.products }/>
      <Footer/>
    </div>
  )
}

export default App
