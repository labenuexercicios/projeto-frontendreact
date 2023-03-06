import { useState } from "react"
import ProductCard from "../ProductCard/ProductCard"
import { HomeStyle, Ordination, ProductCardStyle, List } from "./HomeStyle"


export default function Home(props) {

    const addItemCart = (index) => {
        const existingItemIndex = props.cart.findIndex(item => item.name === props.productsList[index].name)
      
        if (existingItemIndex !== -1) {
          const updatedCart = [...props.cart]
          updatedCart[existingItemIndex].quantity += 1
          props.setCart(updatedCart)
      
          const cartValue = updatedCart.reduce((acc, item) => acc + item.value * item.quantity, 0)
          const totalValue = updatedCart.reduce((acc, item) => acc + item.value * item.quantity, 0)
      
          props.setCartValue(cartValue)
          props.setTotalValue(totalValue)
        } else {
          const newItem = {
            id: props.productsList[index].id,
            name: props.productsList[index].name,
            value: props.productsList[index].value,
            quantity: 1
          }
      
          const updatedCart = [...props.cart, newItem]
          props.setCart(updatedCart)
      
          const cartValue = updatedCart.reduce((acc, item) => acc + item.value * item.quantity, 0)
          const totalValue = updatedCart.reduce((acc, item) => acc + item.value * item.quantity, 0)
      
          props.setCartValue(cartValue)
          props.setTotalValue(totalValue)
        }
      }

    const productList = props.productsList.map((product, index) => {
        return (
            <ProductCard
                key={index}
                product={product}
                addItemCart={() => addItemCart(index)} />
        )
    })


    return (
        <HomeStyle>
            <Ordination>
                <p>Quantidade de produtos: {props.productsList.length}</p>
                <p>Ordenação:
                    <select>
                        <option>Crescente</option>
                        <option>Decrescente</option>
                        <option>Valor</option>
                    </select>
                </p>
            </Ordination>
            <ProductCardStyle>
                <List>
                    {productList}
                </List>
            </ProductCardStyle>
        </HomeStyle>
    )

}