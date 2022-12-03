import React from 'react'
import {
    CardPayment,
    ImagemProduto,
    DetalheProduto,
    PriceCard,
    QuantityProduct,
    DescricaoProduto,
    QuantityRemove,
    ChoosenSize,
    InfoCard,
    CardUserInfo,
    Title,
    ButtonChange,
    CardPaymentAdd,
    CardInfo,
    BillingInfo,
    ButtonClose,
    HeaderPayment,
    ExistingCard,
    TypeOfCard,
    DateExp,
    LinhaShort
} from './PayCard.styled'
import { priceFormatter } from '../../utils/priceFormatter'
import cardImage from '../../assets/visacard.png'
import { FormAddCard } from '../FormAddCard/FormAddCard'



export const PayCard = (props) => {

    const { camiseta,
        increaseQuantityInCart,
        decreaseQuantityInCart,
        removeProductCart,
        users
    } = props

    

    return (
        <>
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
                <ButtonChange>Mudar</ButtonChange>
            </CardUserInfo>
            <hr />
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
                <ButtonChange>Mudar</ButtonChange>
            </CardUserInfo>
            <hr />
            <CardPaymentAdd>
                <HeaderPayment>
                    <Title>02 Método de Pagamento</Title>
                    <ButtonClose>Fechar</ButtonClose>
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
                <FormAddCard/>
            </CardPaymentAdd>
            <hr />















            <CardPayment>
                <ImagemProduto src={camiseta.image} alt="Imagem camiseta" />
                <DetalheProduto>
                    <div>
                        <h3>{camiseta.title}</h3>
                        <p>***** {camiseta.rating}</p>
                        <ChoosenSize>Tamanho: {camiseta.cartSize}</ChoosenSize>
                    </div>
                    <DescricaoProduto>
                        <p>{camiseta.description}</p>
                    </DescricaoProduto>
                </DetalheProduto>

                <PriceCard>
                    <h1>{priceFormatter.format(camiseta.price)}</h1>
                    <QuantityRemove>
                        <QuantityProduct>
                            <button onClick={() => decreaseQuantityInCart(camiseta)}>-</button>
                            {camiseta.quantity}
                            <button onClick={() => increaseQuantityInCart(camiseta)}>+</button>
                        </QuantityProduct>
                        <button onClick={() => removeProductCart(camiseta)}>Remove</button>
                    </QuantityRemove>
                </PriceCard>
            </CardPayment>
        </>
    )
}
