import {Cart, InfoCart, ItemCart, CardCart, Quantity, Info, EmptyCart} from './styled'
import satellites from '../../Satellites/satellites.json'
import { useState } from 'react'

export const PageCart = (props) => { 
  const listId = props.listCart.map((item) => item.id)

  const productsInCart = satellites.filter((product) => {
    if(listId.includes(product.id)){
      return product
    }
  })

  
  const [q, setQ] = useState(Number)
  //ta faltando atualizar apenas a quantidade clicada
  const increaseQuantity = (item) => {
    console.log(item)
    setQ(item.quantity++)
  }
  const decreaseQuantity  = (item) => {
    setQ(item.quantity--)
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
                        <button onClick={() => decreaseQuantity(item)}>&lang;</button>
                        <h4>{q}</h4>
                        <button onClick={() => increaseQuantity(item)}>&rang;</button>
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