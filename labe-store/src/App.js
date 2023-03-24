import Filters from "./Components/Filters/Filters";
import Header from "./Components/Header/Header";
import Home from "./Components/ProductList/Home/Home";
import Cart from "./Components/ShoppingCart/Cart/Cart";
import { GlobalStyle } from "./GlobalStyle";
import {Products} from "./Components/assents/ProductsList"
import { useState } from "react";
import Footer from "./Components/Footer/Footer";



function App() { 

  const [ search, setSearch] = useState("");
  const [ order, setOrder] = useState("");
  const [addCart, setAddCart] = useState([]);
  const [minValue, setMinValue] = useState("");
  const [maxValue, setMaxValue] = useState(500);

  

  
  
  const addToCart = (product) => {

    const newProduct = addCart.find((item)=>item.id === product.id)
    if(newProduct === undefined){
      setAddCart([... addCart, {...product, amount:1}])
    }else{
      const newCart = addCart.map((item)=>{
        if(item.id === product.id){
          return {...newProduct, amount: newProduct.amount+1}
        }else{
          return item
        }

      })
      setAddCart(newCart)
    }

  }

  const deleteProductCart = (product) => {

    const productDeleted = addCart.find((item)=> item.id === product.id)
    if(productDeleted.amount > 1){
      const newCart = addCart.map((item)=>{
        if(item.id === product.id){
          return {... productDeleted, amount:productDeleted.amount-1}
        }else{
          return item
        }
      })
      setAddCart(newCart)
    
    }else{
      const newCart = addCart.filter((item) =>{
        return item.id !== product.id
      })
      setAddCart(newCart)
    }
  }

  const getTotal = () => {
    let sum = 0;

    for (let item of addCart) {
      sum += item.value * item.amount;
    }
    return sum;
  }
  const cartTotal = getTotal()

  const endCart = () => {
    if(addCart.length === 0){
      alert ("Carrinho está vazio")
    }else{
      setAddCart([])
      alert("Compra finalizada com sucesso!")
    }
  }

  
  
    return (
      <div>
        <GlobalStyle/>

        <header>
          <Header
          search={search}
          setSearch={setSearch}/>
        </header>

        <main>
          <nav>
            <Filters
            minValue={minValue}
            setMinValue={setMinValue}
            maxValue={maxValue}
            setMaxValue={setMaxValue}/>
          </nav>

          <article>
            <Home
            Products={Products}
            search={search}
            order={order}
            setOrder={setOrder}
            addToCart={addToCart}
            minValue={minValue}
            setMinValue={setMinValue}
            maxValue={maxValue}
            setMaxValue={setMaxValue}/>
          </article>

          <section>
            <Cart
            Products={Products}
            addCart={addCart}
            setAddCart={setAddCart}
            deleteProductCart={deleteProductCart}
            cartTotal={cartTotal}
            endCart={endCart}
          />
          </section>

        </main>
        <footer>
          <Footer/>
        </footer>
      </div>
    ) 
}

export default App;
