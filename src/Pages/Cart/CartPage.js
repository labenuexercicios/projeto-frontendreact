import React from 'react'
import { ContainerCart, CartPageStyle, FinalCart } from './CartPage.styled'
import { CardCart } from '../../components/CardCart/CardCart'
import { Layout } from '../../components/Layout/Layout'
import astroCart from '../../assets/astro-pensante.png'
import { priceFormatter } from '../../utils/priceFormatter'

const CartPage = (props) => {

  const { cart,
    setCart,
    removeProductCart
  } = props

  const total = cart.reduce((acc, product) => (product.price * product.quantity) + acc, 0)

  const frete = total * 0.05

  const totalQuantity = cart.reduce((acc, product) => (product.quantity) + acc, 0)

  const increaseQuantityInCart = (productToIncrease) => {
    const newCart = [...cart]
    const productFound = newCart.find((productInCart) => productInCart.id === productToIncrease.id)
    productFound.quantity++
    setCart(newCart)
  }

  const decreaseQuantityInCart = (productToDecrease) => {
    if (productToDecrease.quantity > 1) {
      const newCart = [...cart]
      const productFound = newCart.find((productInCart) => productInCart.id === productToDecrease.id)
      productFound.quantity--
      setCart(newCart)
    }
  }

  return (
    <Layout
    totalQuantity={totalQuantity}
    >
      <CartPageStyle>
        <ContainerCart>
          {cart
            .map((camiseta) => {
              return <div><CardCart key={camiseta.id}
                camiseta={camiseta}
                increaseQuantityInCart={increaseQuantityInCart}
                decreaseQuantityInCart={decreaseQuantityInCart}
                removeProductCart={removeProductCart}
              /><hr /></div>
            })}

        </ContainerCart>
        <FinalCart>
          <img src={astroCart} alt="Astrounauta Pensando" />
          <div>
            <h3>Quantidade total: <br /> <h1>{totalQuantity}</h1></h3>
            <h3>Valor total: <br /> <h1>{priceFormatter.format(total)}</h1></h3>
            <h3>Frete: {priceFormatter.format(frete)}</h3>
            <button>Finalizar Compra</button>
          </div>
        </FinalCart>
      </CartPageStyle>
    </Layout>
  )
}

export default CartPage