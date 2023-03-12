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

            const totalValue = updatedCart.reduce((acc, item) => acc + item.value * item.quantity, 0)
            props.setAmount(totalValue)

        } else {
            const newItem = {
                id: props.productsList[index].id,
                name: props.productsList[index].name,
                value: props.productsList[index].value,
                quantity: 1
            }

            const updatedCart = [...props.cart, newItem]
            props.setCart(updatedCart)

            const totalValue = updatedCart.reduce((acc, item) => acc + item.value * item.quantity, 0)

            props.setAmount(totalValue)
        }
    }

    return (
        <HomeStyle>
            <Ordination>
                <p>Quantidade de produtos: {props.productsList.length}</p>
                <p>Ordenação:
                    <select onChange={(e)=>props.setOrder(e.target.value)}>
                        <option value={""}>Selecione</option>
                        <option value={"incrising"}>Crescente</option>
                        <option value={"decresing"}>Decrescente</option>
                        <option value={"price-incrising"}>Valor Crescente</option>
                        <option value={"price-decresing"}>Valor Decrescente</option>
                    </select>
                </p>
            </Ordination>
            <ProductCardStyle>
                <List>
                    {props.filteredList
                   /*  .filter((product) => {
                        if(product.value >= props.minFilter){
                          return product
                        }
                      })
                      .filter((product) => {
                        if(product.value <= props.maxFilter){
                          return product
                        }
                      })
                    .filter((product) => {
                        if(props.searchFilter){
                          return product.name.toLowerCase().includes(props.searchFilter.toLowerCase())
                        }else{
                          return props.productsList
                        }  
                      }) */
                    .sort((a, b) => {
                        if (props.order === "incrising") {
                            return a.name.localeCompare(b.name)
                        }
                        if (props.order === "decresing") {
                            return b.name.localeCompare(a.name)
                        }
                        if (props.order === "price-incrising") {
                            return a.value - b.value
                        }
                        if (props.order === "price-decresing") {
                            return b.value - a.value
                        }
                    })
                    .map((product, index) => {
                        return (
                    <ProductCard
                        key={index}
                        product={product}
                        addItemCart={() => addItemCart(index)} />
                    )
                    })}
                </List>
            </ProductCardStyle>
        </HomeStyle>
    )

}