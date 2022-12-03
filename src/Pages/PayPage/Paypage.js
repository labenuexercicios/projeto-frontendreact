import React, { useContext } from 'react'
import { Layout } from '../../components/Layout/Layout'
import { ContainerCart, CartPageStyle, FinalCart} from './PayPage.styled'
import {PayCard} from '../../components/PayCard/PayCard'
import { GlobalContext } from '../../contexts/GlobalContext'
import { priceFormatter } from '../../utils/priceFormatter'
import astroCart from '../../assets/astro-pensante.png'
import { goToLoginPage } from '../../Router/coordinator'
import { useNavigate } from 'react-router-dom'


export const PayPage = () => {

  const navigate = useNavigate()

  const context = useContext(GlobalContext)
  const {cart,
    increaseQuantityInCart,
    decreaseQuantityInCart,
    removeProductCart,
    totalQuantity,
    total,
    frete
} = context

  return (
    <Layout>
      <CartPageStyle>
        <ContainerCart>
          {cart
            .map((camiseta) => {
              return <div><PayCard key={camiseta.id}
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
