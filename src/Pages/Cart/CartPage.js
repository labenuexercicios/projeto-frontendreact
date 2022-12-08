import React, { useContext } from 'react'
import { ContainerCart, CartPageStyle, FinalCart } from './CartPage.styled'
import { CardCart } from '../../components/CardCart/CardCart'
import { Layout } from '../../components/Layout/Layout'
import astroCart from '../../assets/astro-pensante.png'
import { priceFormatter } from '../../utils/priceFormatter'
import { goToLoginPage } from '../../Router/coordinator'
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from '../../contexts/GlobalContext'

const CartPage = () => {

  const context = useContext(GlobalContext)

  const { cart,
    setCart,
    removeProductCart,
    totalQuantity,
    total,
    frete,

  } = context

  const navigate = useNavigate()

  const increaseQuantityInCart = (productToIncrease) => {
    const newCart = [...cart]
    const productFound = newCart.find((productInCart) => productInCart.id === productToIncrease.id && productInCart.cartSize === productToIncrease.cartSize)
    productFound.quantity++
    setCart(newCart)
  }

  const decreaseQuantityInCart = (productToDecrease) => {
    if (productToDecrease.quantity > 1) {
      const newCart = [...cart]
      const productFound = newCart.find((productInCart) => productInCart.id === productToDecrease.id && productInCart.cartSize === productToDecrease.cartSize)
      productFound.quantity--
      setCart(newCart)
    }
  }

  return (
    <Layout
    totalQuantity={totalQuantity} 
    cart={cart}
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
            {cart.length >=1 ? <button onClick={()=>goToLoginPage(navigate)}>Finalizar Compra</button> : <div></div>}
          </div>
        </FinalCart>
      </CartPageStyle>
    </Layout>
  )
}

export default CartPage