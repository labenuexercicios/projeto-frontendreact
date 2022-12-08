import { Layout } from "../../components/Layout/Layout"
import { Cart, Infomation, Items, EmptyCart } from "./styled"
import { useEffect, useState, useContext } from "react"
import { CardCart } from "../../components/CardCart/CardCart"
import { GlobalContext } from "../../context/GlobalContext"
import {priceFormatter} from '../../utils/priceFormatter'


export const CartPage = () => {

  const context = useContext(GlobalContext)
  const {listCart, setListCart} = context

  const quantity = (item, moreOrLess) => {
    const newListCart = [...listCart]

    const itemFound = newListCart.find((element) => element.id === item.id)
    itemFound.quantity = itemFound.quantity + moreOrLess

    const updateList = newListCart.filter((element)=> element.id !== item.id)
    updateList.push(itemFound)

    setListCart(updateList)
  }

  const deleteOfCart = (item) => {
    const newListCart = [...listCart]

    const ListWithoutItem = newListCart.filter((elemente) => {
      item.quantity = 1
      return elemente.id !== item.id
    })
    setListCart(ListWithoutItem)
  }

  const [totalCart, setTotalCart] = useState(0);
  
  useEffect(()=>{
    let soma = 0
    for(let item of listCart){
      soma += item.quantity * item.price
    }
    setTotalCart(soma)
  },[listCart])

  return (
    <Layout>
      <Cart>
        <Items>
        {listCart.length !== 0 ? 
            listCart
            .sort((a,b) => {
              if(a.id < b.id){
                return  1
              } else if ( a.id > b.id){
                return -1 
              }
            })
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
        <Infomation>
          <div>
            Infos de login
          </div>
          <div>
            <p>Total a pagar: {priceFormatter.format(totalCart)}</p>
          </div>
        </Infomation>
      </Cart>
    </Layout>
  )
}