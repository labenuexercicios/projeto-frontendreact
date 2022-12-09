import React from 'react'
import {
    CardPayment,
    ImagemProduto,
    DetalheProduto,
    PriceCard,
    QuantityProduct,
    DescricaoProduto,
    ChoosenSize,
    ContentProduct,
} from './PayCard.styled'
import { priceFormatter } from '../../utils/priceFormatter'


export const PayCard = (props) => {

    const { camiseta
    } = props

    return (
        <>
            <CardPayment>
                <ContentProduct>
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
                        <h2>{priceFormatter.format(camiseta.price)}</h2>
                        <QuantityProduct>
                            {camiseta.quantity}
                        </QuantityProduct>
                    </PriceCard>
                </ContentProduct>
            </CardPayment>
        </>
    )
}
