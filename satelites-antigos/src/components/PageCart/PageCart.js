import {Cart, ItemCart, EmptyCart} from './styled'
import satellites from '../../Satellites/satellites.json'

export const PageCart = (props) => { 

  const productsInCart = satellites.filter((product) => {
    if(props.listIdCart.includes(product.id)){
      return product
    }
  })

  return(
    <Cart>
      {props.listIdCart.length !== 0 ? 
          productsInCart
          .map((item) => {
            return (
              <ItemCart key={item.id}>
                <div className='image-cart'>
                  <img src={item.image}/>
                </div>
                <div className='info-cart'>
                  <p>{item.name}</p>
                </div>
              </ItemCart>
            )
          })
          :
            <EmptyCart>
              <p>Carrinho Vazio :( </p>
            </EmptyCart>
      }
    </Cart>
  )
}