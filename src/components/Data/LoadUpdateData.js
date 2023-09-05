import axios from "axios"
import { useContext, useEffect } from "react"
import { ProductsContext } from "../Context/ProductsContext"
import { saveCart } from "../Libs/Lib"
import { updateStatusCart } from "../ShoppingCart/ShoppingCart"

let onRestart=true

export default function LoadData() {
  const {
    cart,
    setCart,
    setProducts,
    setItemsCart,
    setTotalCart,
    setTotalProducts
  } = useContext(ProductsContext)
  
  // ler dados dos produtos
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/static/Data.json")
        setProducts(response.data);
        setTotalProducts(response.data.length)
      }
      catch (error) {
        console.log(error);
      };
    })()
  }, [])

  // criar ou ler o carrinho
  useEffect(() => {
    if (!localStorage.shoppingCart) {
      saveCart(cart)
    } else {
      setCart(JSON.parse(localStorage.getItem("shoppingCart")))
    }
  }, [])

  useEffect(() => {
    if(!onRestart) updateStatusCart(cart, setItemsCart, setTotalCart)
    onRestart=false
  }, [cart])

}




