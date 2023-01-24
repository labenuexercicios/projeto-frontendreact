import { GlobalStyle } from './GlobalStyle'
import Header from './components/header/Header'
import Main from './components/main/Main' 
import Footer from './components/footer/Footer'

function App() {
  
  return (
    <div className="App">
      <GlobalStyle/> 
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default App
