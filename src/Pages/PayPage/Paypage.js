import React, { useContext, useState } from 'react'
import { Layout } from '../../components/Layout/Layout'
import {PayCard} from '../../components/PayCard/PayCard'
import { GlobalContext } from '../../contexts/GlobalContext'
import { priceFormatter } from '../../utils/priceFormatter'
import astroCart from '../../assets/astro-pensante.png'
import { goToConfirmPage } from '../../Router/coordinator'
import { useNavigate } from 'react-router-dom'
import {CardPaymentAdd,
  ContainerCart,
  CartPageStyle,
  FinalCart,
    HeaderPayment,
    CardInfo,
    BillingInfo,
    ButtonClose,
    ExistingCard,
    TypeOfCard,
    DateExp,
    LinhaShort,
    Title,
    InfoCard,
    ButtonChange,
    CardUserInfo,
    HeaderProduct
} from './PayPage.styled'
import cardImage from '../../assets/visacard.png'
import { FormAddCard } from '../../components/FormAddCard/FormAddCard'


export const PayPage = () => {

  const context = useContext(GlobalContext)
  const {cart,
    increaseQuantityInCart,
    decreaseQuantityInCart,
    removeProductCart,
    totalQuantity,
    total,
    frete,
    users
} = context

  const navigate = useNavigate()
  const [switchMethod, setSwitchMethod] = useState("CardExist")

  const goToAddCard = () => setSwitchMethod("AddCard")
  const goToCardExist = () => setSwitchMethod("CardExist")
  

  const renderMethod = () =>{
      switch (switchMethod) {
        case "CardExist":
          return <>
          <CardUserInfo>
          <Title>02 Método de Pagamento</Title>
          <InfoCard>
              <CardInfo>
                  <img src={cardImage} alt="Imagem Cartão" />
                  <span>Visa final 2194</span>
              </CardInfo>
              <BillingInfo>
                  <p>Endereço de cobrança:</p>
                  <span>O mesmo endereço de entrega.</span>
              </BillingInfo>
          </InfoCard>
          <ButtonChange onClick={goToAddCard}>Mudar</ButtonChange>
      </CardUserInfo>
      <hr /></>
        case "AddCard":
          return <>
          <CardPaymentAdd>
              <HeaderPayment>
                  <Title>02 Método de Pagamento</Title>
                  <ButtonClose onClick={goToCardExist}>Fechar</ButtonClose>
              </HeaderPayment>
              <ExistingCard>
                  <TypeOfCard>
                      <input type='radio'></input>
                      <img src={cardImage} alt="Card Image"/>
                      <span>Visa finalizando com 2194</span>
                  </TypeOfCard>
                  <div>
                      <p>Nome no Cartão</p>
                      <p>Marina Jaudy</p>
                  </div>
                  <DateExp>
                      <p>Expirado em</p>
                      <p>03/2029</p>
                  </DateExp>
              </ExistingCard>
              <LinhaShort></LinhaShort>
              <FormAddCard
              goToCardExist={goToCardExist}/>
          </CardPaymentAdd>
          <hr /></>
        default:
          return <div>Tela não existe</div>
      }
    }



  return (
    <Layout>
      <CartPageStyle>
        <ContainerCart>
        <CardUserInfo>
                <Title>01 Endereço de Entrega</Title>
                {
                    users.map((user) => {
                        return <InfoCard key={user.id}>
                            <p>{user.name}</p>
                            <p>{user.address}</p>
                            <p>{user.district}</p>
                            <p>{user.city}, {user.state} {user.zipCode}</p>
                        </InfoCard>
                    })
                }
                {/* <ButtonChange>Mudar</ButtonChange> */}
            </CardUserInfo>
            <hr />
            {renderMethod()}
            <HeaderProduct>
                    <Title>03 Produtos no carrinho</Title>
            </HeaderProduct>
          {cart
            .map((camiseta) => {
              return <div><PayCard key={camiseta.id}
                camiseta={camiseta}
                increaseQuantityInCart={increaseQuantityInCart}
                decreaseQuantityInCart={decreaseQuantityInCart}
                removeProductCart={removeProductCart}
                users={users}
              /><hr/></div>
            })}
        </ContainerCart>
        <FinalCart>
          <img src={astroCart} alt="Astrounauta Pensando" />
          <div>
            <h3>Quantidade total: <br /> <h1>{totalQuantity}</h1></h3>
            <h3>Valor total: <br /> <h1>{priceFormatter.format(total)}</h1></h3>
            <h3>Frete: {priceFormatter.format(frete)}</h3>
            {cart.length >=1 ? <button onClick={()=>goToConfirmPage(navigate)}>Confirmar Compra</button> : <div></div>}
          </div>
        </FinalCart>
      </CartPageStyle>
    </Layout>
  )
}
