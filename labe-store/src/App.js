import React, { useState } from 'react';
import { GlobalStyled } from './GlobalStyled';
import Home from './pages/Home';
import ListProds from "./components/data/data.json";
import CartPage from './pages/CartPage';




function App() {
  const [prodShopping, setProdShopping] = useState([...ListProds])
  const [numberMin, setNumberMin] = useState("")
  const [numberMax, setNumberMax] = useState("")
  const [cart, setCart] = useState([])
  const [pages, setPages] = useState(1)
  const [name, setName] = useState("")
  const [priceTot, setPriceTot] = useState(0)
  const [sortProd, setSort] = useState("")
  // /////////////////////////////////////////////////////

  const goHome = () => {
    /*Função que carrega pagina principal*/
    setPages(1)
  }
  const goCart = () => {
    /*Função que carrega pagina com os produtos no carrinho */
    setPages(2)
  }
  const addProdInCart = (prod) => {
    const copyProductsCart = [...cart] //copia carrinho
    const item = copyProductsCart.find(product => product.id === prod.id) //
    if (!item) {
      copyProductsCart.push({
        id: prod.id,
        name: prod.name,
        quant: 1,
        price: prod.price,
        priceSingle: prod.price,
        imagem: prod.thumbnail
      })
    } else {
      item.quant = item.quant + 1
      item.price = item.priceSingle * item.quant
    }
    priceTotFunctionSum(copyProductsCart)
    localStorage.setItem("carrinho", JSON.stringify(copyProductsCart))
    setCart(copyProductsCart)
  }



  const getCart = () => {
    const c = JSON.parse(localStorage.getItem("carrinho"))
    setCart(c)
  }



  const priceTotFunctionSum = (array) => {
    let p = 0
    const priceProds = array.map((item) => { return item.price })
    for (let index = 0; index < priceProds.length; index++) {
      p = priceProds[index] + p
      setPriceTot(p)
    }
  }






  const removeProductToCart = (prod) => {
    /*Função que remove produtos do carrinho*/
    const copyProductsCart = [...cart]
    const item = copyProductsCart.find(product => product.id === prod.id)
    if (item.quant !== 1) {
      item.quant = item.quant - 1
      item.price = item.price - item.priceSingle
      setCart(copyProductsCart)
      localStorage.setItem("carrinho", JSON.stringify(copyProductsCart))
    } else {
      const arrayFilter = copyProductsCart.filter(products => products.id !== prod.id)
      localStorage.setItem("carrinho", JSON.stringify(arrayFilter))
      setCart(arrayFilter)
    }
    priceTotFunctionDecrease(item)

  }

  const priceTotFunctionDecrease = (item) => {
    const decrease = item.priceSingle
    const price = priceTot - decrease
    setPriceTot(price)
  }

  const filterName = (e) => {
    /*Função que guardar nome do produto digitado*/
    setName(e.target.value)
  }


  return (
    <div >
      <GlobalStyled />

      {pages === 1 && <Home
        prodShopping={prodShopping}
        setProdShopping={setProdShopping}

        numberMin={numberMin}
        setNumberMin={setNumberMin}

        numberMax={numberMax}
        setNumberMax={setNumberMax}

        priceTot={priceTot}
        removeProductToCart={removeProductToCart}


        cart={cart}
        setCart={setCart}

        goCart={goCart}
        addProdInCart={addProdInCart}

        filterName={filterName}
        name={name}

        sortProd={sortProd}
        setSort={setSort}

        getCart={getCart}
      />}
      {pages === 2 && <CartPage
        cart={cart} setCart={setCart}
        goHome={goHome}
        removeProductToCart={removeProductToCart}
        addProdInCart={addProdInCart}

        priceTot={priceTot}
      />}

    </div>
  );
}

export default App;
