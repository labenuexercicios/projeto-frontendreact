import React from 'react'
import { CardCamiseta, ImagemProduto, DetalheProduto, PriceCard, QuantityProduct, DescricaoProduto, QuantityRemove, ChoosenSize } from './CardCart.styled'
import { priceFormatter } from '../../utils/priceFormatter'

export const CardCart = (props) => {

    const { camiseta,
        increaseQuantityInCart,
        decreaseQuantityInCart,
        removeProductCart
    } = props

    return (
        <CardCamiseta key={camiseta.id}>
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
                        {camiseta.quantity > 1 ? <button onClick={() => decreaseQuantityInCart(camiseta)}>-</button> : <div></div>}
                        {camiseta.quantity}
                        <button onClick={() => {
                            console.log(camiseta)
                            return increaseQuantityInCart(camiseta)
                        }}>+</button>
                    </QuantityProduct>
                    <button onClick={() => removeProductCart(camiseta)}>Remove</button>
                </QuantityRemove>
            </PriceCard>
        </CardCamiseta>
    )
}
