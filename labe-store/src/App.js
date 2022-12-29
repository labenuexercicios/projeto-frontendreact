import React, { useState } from 'react';
import { GlobalStyled } from './GlobalStyled';
import Home from './pages/Home';
import ListProds from "./components/data/data.json";
import CartPage from './pages/CartPage';




function App() {
  const [prodShopping, setProdShopping] = useState([...ListProds])
  const [numberMin, setNumberMin] = useState(-Infinity)
  const [numberMax, setNumberMax] = useState(Infinity)
  const [cart, setCart] = useState([])
  const [pages, setPages] = useState(1)
  const [name, setName] = useState("")
  const [priceTot, setPriceTot] = useState(0)

  console.log(numberMin)
  // /////////////////////////////////////////////////////
  const goHome = () => {
    /*Função que carrega pagina principal*/
    setPages(1)
  }
  // /////////////////////////////////////////////////////
  const goCart = () => {
    /*Função que carrega pagina com os produtos no carrinho */
    setPages(2)
    getLocalStorageCart()
  }
  // /////////////////////////////////////////////////////
  const addProdInCart = (prod) => {
    /*Funçao que adiciona produtos no carrinho */

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
      // setCart(copyProductsCart)
      // priceTotFunctionSum(copyProductsCart)
      // setLocalStorageCart(copyProductsCart)
      setCart(copyProductsCart)
    } else {
      //caso o produto ja esteja no carrinho, so e preciso alterar a quantidade
      item.quant = item.quant + 1
      item.price = prod.priceUni * item.quant
      priceTotFunctionSum(copyProductsCart)
      setLocalStorageCart(copyProductsCart)
      setCart(copyProductsCart)
    }
  }
  // /////////////////////////////////////////////////////
  const removeProductToCart = (prod) => {
    /*Função que remove produtos do carrinho*/
    // criando uma copia do array original
    const copyProductsCart = [...cart]
    //SELECIONANDO QUAL PRODUTO SERÁ REMOVIDO DO CARRINHO
    const item = copyProductsCart.find(product => product.id === prod.id)
    if (item.quant > 1) {
      //CASO TENHA MAIS DE UM PRODUTO, ESSE VALOR SERA REDUZIDO ATE CHEGAR A UM
      item.quant = item.quant - 1
      item.price = item.price - item.priceUni
      //SETANDO MUDANÇAS PARA SER RENDERIZADO A QUANTIDADE DE PRODUTOS
      priceTotFunctionDecrease(item)
      setCart(copyProductsCart)
      setLocalStorageCart(copyProductsCart)
    } else {
      //CASO SO TENHA UM PRODUTO, E SE ESSE FOR REMOVIDO, O FILTER IRA EXCLUIR ESSE PRODUTO
      const arrayFilter = copyProductsCart.filter(products => products.id !== prod.id)
      setCart(arrayFilter)
      priceTotFunctionDecrease(item)
      setLocalStorageCart(arrayFilter)
    }
  }
  // /////////////////////////////////////////////////////

  const filterName = (e) => {
    /*Função que guardar nome do produto digitado*/
    setName(e.target.value)
  }
  // /////////////////////////////////////////////////////


  const priceTotFunctionSum = (array) => {
    /**
     * Função que soma valores dos produtos e retorna um valor total
     */
    let p = 0
    const priceProds = array.map((item) => { return item.price })
    for (let index = 0; index < priceProds.length; index++) {
      p = priceProds[index] + p
      setPriceTot(p)
    }
  }

  const priceTotFunctionDecrease = (item) => {
    /**
     * Função que remove preco do item removido do carrinho
     */
    const decrease = item.priceUni
    const price = priceTot - decrease
    setPriceTot(price)
  }

  // /////////////////////////////////////////////////////
  const setLocalStorageCart = (cart) => {
    /**
     * Função que guarda dados do carrinho no armazenamento local
     */
    const copyCart = cart
    const cartStr = JSON.stringify(copyCart)
    localStorage.setItem("cart", cartStr)
  }


  const getLocalStorageCart = () => {
    /**
     * Função que devolve carrinho que esta armazenado no local storage
     */
    const cart = localStorage.getItem("cart")
    const cartArray = JSON.parse(cart)
    setCart(cartArray)
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
