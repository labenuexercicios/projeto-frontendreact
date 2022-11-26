import {Cart, InfoCart, ItemCart, CardCart, Quantity, Info, EmptyCart} from './styled'
import satellites from '../../Satellites/satellites.json'
import { useState } from 'react'
import { useEffect } from 'react'

export const PageCart = (props) => { 
  const listId = props.listCart.map((item) => item.id)

  const productsInCart = satellites.filter((product) => {
    if(listId.includes(product.id)){
      // console.log(product)
      return product
    }
  })

  const quantity = (item, moreOrLess) => {
    const newList = [...props.listCart]
    const productFound = newList.find((elemente)=> elemente.id === item.id)
    productFound.quantity = productFound.quantity + moreOrLess
    props.setListCart(newList)
    return productFound.quantity
  }

  return(
    <Cart>
      <ItemCart>
        {props.listCart.length !== 0 ? 
            productsInCart
            .map((item) => {
              return (
                <CardCart key={item.id}>
                  <div className='image-card'>
                    <img src={item.image}/>
                  </div>
                  <div className='info-card'>
                    <Info>
                      <h1>{item.name.toUpperCase()}</h1>
                      <p>Total: <span>{item.price}</span></p>
                    </Info>
                    <Quantity>
                      <div> 
                        <button disabled={item.quantity === 1 ? true : false} onClick={() => quantity(item, -1)}>&lang;</button>
                        <h4>{item.quantity}</h4>
                        <button onClick={() => quantity(item, 1)}>&rang;</button>
                      </div>
                      <div>
                        <p>AVAILABLE</p>
                      </div>
                    </Quantity>
                  </div>
                </CardCart>
              )
            })
            :
              <EmptyCart>
                <p>Carrinho Vazio :( </p>
              </EmptyCart>
        }
      </ItemCart>
      <InfoCart></InfoCart>
    </Cart>
  )
}