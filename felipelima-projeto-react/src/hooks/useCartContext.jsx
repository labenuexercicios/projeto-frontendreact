import { createContext, useState, useEffect } from "react";

export const CartContext = createContext()

const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([])

  const [amount, setAmount] = useState(0)

  const [total, setTotal] = useState(0)



  useEffect(() => {

    const total = cart.reduce((accumulator, currentItem) => {

      return accumulator + currentItem.price * currentItem.amount

    }, 0)

    setTotal(total)

  }, [cart])


  useEffect(() => {

    if (cart) {

      const amount = cart.reduce((accumulator, currentItem) => {

        return accumulator + currentItem.amount

      }, 0)

      setAmount(amount)
    }

  }, [cart])


  const addCart = (product, id) => {

    //INICIALIZA O OBJETO COM 1
    const newItem = { ...product, amount: 1 }

    const cartItem = cart.find((item) => {

      return item.id === id
    })

    if (cartItem) {

      const newCart = [...cart].map((item) => {

        if (item.id === id) {

          return { ...item, amount: cartItem.amount + 1 }
        } else {

          return item
        }
      })

      setCart(newCart)

    } else {

      setCart([...cart, newItem])

    }

  }
}