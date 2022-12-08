import React, { useContext, useState, useEffect } from 'react'
import { Layout } from '../../components/Layout/Layout'
import { PayCard } from '../../components/PayCard/PayCard'
import { GlobalContext } from '../../contexts/GlobalContext'
import { priceFormatter } from '../../utils/priceFormatter'
import astroCart from '../../assets/astro-pensante.png'
import { goToConfirmPage } from '../../Router/coordinator'
import { useNavigate } from 'react-router-dom'
import {
  CardPaymentAdd,
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
  HeaderProduct,
  RemoveCard,
  ContainerForm,
  LabelInput,
  FormLabel,
  Input,
  ButtonAddCard,
  InputCvv,
  ContainerAddCard,
  ContainerTypeCard
} from './PayPage.styled'
import trashIcon from '../../assets/trasIcon.svg'
import { useForm } from '../../hook/useForm'
import visaCard from '../../assets/visacard.png'
import masterCard from '../../assets/mastercard.jpeg'
import eloCard from '../../assets/elocard.png'



export const PayPage = () => {

  const context = useContext(GlobalContext)
  const { cart,
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

  const [form, onChangeForm] = useForm({ cardNumber: "", nameCard: "", dateExp: "", securityCvv: "" })

  const cardFromLocalStorage = JSON.parse(localStorage.getItem("card") || "[]")
  const [card, setCard] = useState(cardFromLocalStorage)

    useEffect(()=>{
        localStorage.setItem("card", JSON.stringify(card))
      }, [card])


  const handleClick = (event) => {
    event.preventDefault()
    console.log(`Numero Carta: ${form.cardNumber} Nome Cartão: ${form.nameCard} Date Exp: ${form.dateExp} CVV: ${form.securityCvv}`)
    const newCard = [...card, form]
    setCard(newCard)
    localStorage.setItem("card", JSON.stringify(newCard))
    goToCardExist()
  }

  // const removeProductCard = (cardToRemove) =>{
  //   const newCard = [...card]
  //   const productRemove = newCard.find ((cardInCard)=> cardInCard.cardNumber === cardToRemove.cardNumber)
  //   const productRemoveIndex = newCard.findIndex ((cardInCard)=> cardInCard.cardNumber === cardToRemove.cardNumber)
  //   console.log(productRemove)
  //   newCard.splice(productRemoveIndex, 1)
  //   setCard(newCard)
  // }

  const renderTypeCard = (card)=>{
    if((4500000000000000 > card.cardNumber) && (card.cardNumber >= 400000000000000)){
      console.log(`primeiro case`)
      return <img src={visaCard} alt="Imagem Cartão" />
    } else if ((5000000000000000 > card.cardNumber) && (card.cardNumber >= 4500000000000000)){
      return <img src={masterCard} alt="Imagem Cartão" />
    } else if ((5500000000000000 > card.cardNumber) && (card.cardNumber >= 5000000000000000)){
      return <img src={eloCard} alt="Imagem Cartão" />
    } else{
      console.log('seu cartão não existe')
    }}


  const renderMethod = () => {
    switch (switchMethod) {
      case "CardExist":
        return <>
          <CardUserInfo>
            <Title>02 Método de Pagamento</Title>
            {card.map((cardInfo)=>{
              return (
                <InfoCard>
                <CardInfo>
                  {renderTypeCard(cardInfo)}
                  {/* <img src={visaCard} alt="Imagem Cartão" /> */}
                  <span> Visa final {cardInfo.cardNumber % 10000}</span>
                </CardInfo>
                <BillingInfo>
                  <p>Endereço de cobrança:</p>
                  <span>O mesmo endereço de entrega.</span>
                </BillingInfo>
              </InfoCard>
              )
            })
            }
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
            {
              card.map((cardInfo)=>{
                return (<ExistingCard>
              <TypeOfCard>
                <img src={visaCard} alt="Card Image" />
                <span>Visa finalizando {cardInfo.cardNumber % 10000}</span>
              </TypeOfCard>
              <div>
                <p>Nome no Cartão</p>
                <p>{cardInfo.nameCard}</p>
              </div>
              <RemoveCard
                // onClick={()=>removeProductCard(card)} 
                src={trashIcon} alt="Trash Remove" />
              <DateExp>
                <p>Expirado em</p>
                <p>{cardInfo.dateExp}</p>
              </DateExp>
            </ExistingCard>)
              })
            }
            <ExistingCard>
              <TypeOfCard>
                <img src={visaCard} alt="Card Image" />
                <span>Visa finalizando {form.cardNumber % 10000}</span>
              </TypeOfCard>
              <div>
                <p>Nome no Cartão</p>
                <p>{form.nameCard}</p>
              </div>
              <RemoveCard
                // onClick={()=>removeProductCard(card)} 
                src={trashIcon} alt="Trash Remove" />
              <DateExp>
                <p>Expirado em</p>
                <p>{form.dateExp}</p>
              </DateExp>
            </ExistingCard>
            <LinhaShort></LinhaShort>
            <ContainerAddCard>
                <ContainerForm onSubmit={handleClick}>
                  <LabelInput>
                    <FormLabel for="cardNumber">Número do cartão:</FormLabel>
                    <Input
                      id="cardNumber"
                      type="card"
                      value={form.cardNumber}
                      name="cardNumber"
                      onChange={onChangeForm}
                      maxLength={16}
                      required
                    />
                  </LabelInput>
                  <LabelInput>
                    <FormLabel for="nameCard">Nome no cartão:</FormLabel>
                    <Input
                      id="nameCard"
                      type="text"
                      value={form.nameCard}
                      name="nameCard"
                      onChange={onChangeForm}
                      // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                      required
                    />
                  </LabelInput>
                  <LabelInput>
                    <FormLabel for="dateExp">Data de Expiração:</FormLabel>
                    <Input
                      id="dateExp"
                      type="month"
                      format="mm/aaaa"
                      value={form.dateExp}
                      name="dateExp"
                      onChange={onChangeForm}
                      // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                      required
                    />
                  </LabelInput>
                  <LabelInput>
                    <FormLabel for="securityCvv">Cód. Segurança - CVV/CVC:</FormLabel>
                    <InputCvv
                      id="securityCvv"
                      type="number"
                      value={form.securityCvv}
                      name="securityCvv"
                      onChange={onChangeForm}
                      required
                    />
                  </LabelInput>
                  <ButtonAddCard>Adicionar</ButtonAddCard>
                </ContainerForm>
                <ContainerTypeCard>
                  <p>Astro Tshirts aceita alguns tipo bandeira de cartão de crédito e débito: </p>
                  <div>
                    <img src={visaCard} alt="Visa card" />
                    <img src={masterCard} alt="Master card" />
                    <img src={eloCard} alt="Elo card" />
                  </div>
                </ContainerTypeCard>
              </ContainerAddCard>
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
                card={card}
                setCard={setCard}
              /><hr /></div>
            })}
        </ContainerCart>
        <FinalCart>
          <img src={astroCart} alt="Astrounauta Pensando" />
          <div>
            <h3>Quantidade total: <br /> <h1>{totalQuantity}</h1></h3>
            <h3>Valor total: <br /> <h1>{priceFormatter.format(total)}</h1></h3>
            <h3>Frete: {priceFormatter.format(frete)}</h3>
            {cart.length >= 1 ? <button onClick={() => goToConfirmPage(navigate)}>Confirmar Compra</button> : <div></div>}
          </div>
        </FinalCart>
      </CartPageStyle>
    </Layout>
  )
}
