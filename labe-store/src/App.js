import React, { useState } from 'react';
import { GlobalStyled } from './GlobalStyled';
import Home from './pages/Home';
import ListProds from "./components/data/data.json";
import CartPage from './pages/CartPage';




function App() {
  const [prodShopping, setProdShopping] = useState([...ListProds])
  const [numberMin, setNumberMin] = useState(-Infinity)
  const [cart, setCart] = useState([])
  const [pages, setPages] = useState(1)
  const [name, setName] = useState("")
  const [priceTot, setPriceTot] = useState("0,00")
  // /////////////////////////////////////////////////////

  const goHome = () => {
    setPages(1)
  }
  // /////////////////////////////////////////////////////

  const goCart = () => {
    setPages(2)
  }
  // /////////////////////////////////////////////////////

  const addProdInCart = (prod) => {
    //copiando dados dos produtos
    const copyProductsCart = [...cart]

    // verificando se o produto ja esta na lista
    const item = copyProductsCart.find(product => product.id === prod.id)

    if (!item) {
      // caso o produto não exista no array cart, será feita a inclusao de produto
      copyProductsCart.push({
        id: prod.id,
        name: prod.name,
        quant: 1,
        price: prod.price,
        priceUni: prod.price,
        imagem: prod.thumbnail
      })
      setCart(copyProductsCart)


    } else {
      //caso o produto ja esteja no carrinho, so e preciso alterar a quantidade
      item.quant = item.quant + 1
      item.price = prod.priceUni * item.quant

    }

    //setando a nova lista de produtos que esta no carrinho
    setCart(copyProductsCart)
    priceTotFunctionSum(copyProductsCart)


  }
  // /////////////////////////////////////////////////////
  const removeProductToCart = (prod) => {
    // criando uma copia do array original
    const copyProductsCart = [...cart]

    //SELECIONANDO QUAL PRODUTO SERÁ REMOVIDO DO CARRINHO
    const item = copyProductsCart.find(product => product.id === prod.id)
    if (item.quant > 1) {
      //CASO TENHA MAIS DE UM PRODUTO, ESSE VALOR SERA REDUZIDO ATE CHEGAR A UM
      item.quant = item.quant - 1
      item.price = item.price - item.priceUni

      //SETANDO MUDANÇAS PARA SER RENDERIZADO A QUANTIDADE DE PRODUTOS
      setCart(copyProductsCart)


    } else {
      //CASO SO TENHA UM PRODUTO, E SE ESSE FOR REMOVIDO, O FILTER IRA EXCLUIR ESSE PRODUTO
      const arrayFilter = copyProductsCart.filter(products => products.id !== prod.id)
      setCart(arrayFilter)
    }
    priceTotFunctionDecrease(item)

  }
  // /////////////////////////////////////////////////////

  const filterName = (e) => {
    setName(e.target.value)
  }
  // /////////////////////////////////////////////////////


  const priceTotFunctionSum = (array) => {
    let p = 0
    const priceProds = array.map((item) => { return item.price })
    for (let index = 0; index < priceProds.length; index++) {
      p = priceProds[index] + p
      setPriceTot(p)
    }
  }

  const priceTotFunctionDecrease = (item) => {
    const decrease = item.priceUni
    const price = priceTot - decrease
    setPriceTot(price)
  }
  // /////////////////////////////////////////////////////

  const localStorage = () => {

  }
  return (
    <div >
      <GlobalStyled />

      {pages === 1 && <Home
        prodShopping={prodShopping}
        setProdShopping={setProdShopping}

        numberMin={numberMin}
        setNumberMin={setNumberMin}

        cart={cart}
        setCart={setCart}

        goCart={goCart}
        addProdInCart={addProdInCart}

        filterName={filterName}
        name={name}
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
