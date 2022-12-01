import { Layout } from "../../components/Layout/Layout"
import { Cart, Infomation, Items, EmptyCart } from "./styled"
import { useEffect, useState } from "react"
import { CardCart } from "../../components/CardCart/CardCart"

export const CartPage = () => {
  const [itemsCart, setItemsCart] = useState(JSON.parse(localStorage.getItem("itemsCart")));

  useEffect(()=>{
    window.localStorage.setItem("itemsCart", JSON.stringify(itemsCart))
  },[itemsCart])

  const quantity = (item, moreOrLess) => {
    const newList = [...itemsCart]

    const productFound = newList.find((elemente)=> elemente.id === item.id)
    productFound.quantity = productFound.quantity + moreOrLess
    
    setItemsCart(newList)
    return productFound.quantity
  }

  const deleteOfCart = (item) => {
    const newList = [...itemsCart]
    const ListWithoutItem = newList.filter((elemente) => {
      item.quantity = 1
      return elemente.id !== item.id
    })
    setItemsCart(ListWithoutItem)
  }

  return (
    <Layout>
      <Cart>
        <Items>
        {itemsCart !== 0 ? 
            itemsCart
            .map((item) => {
              return (
                  <CardCart 
                    key={item.id}
                    item={item}
                    quantity={quantity}
                    deleteOfCart={deleteOfCart}
                  />
              )
            })
            :
              <EmptyCart>
                <p>YOUR SHOPPING CART IS EMPTY.</p>
              </EmptyCart>
          }
        </Items>
        <Infomation></Infomation>
      </Cart>
    </Layout>
  )
}