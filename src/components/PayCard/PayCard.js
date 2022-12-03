import React, { useContext } from 'react'
import { CardPayment, ImagemProduto, DetalheProduto, PriceCard, QuantityProduct, DescricaoProduto, QuantityRemove, ChoosenSize } from './PayCard.styled'
import { priceFormatter } from '../../utils/priceFormatter'

export const PayCard = (props) => {

    const {camiseta,
        increaseQuantityInCart,
        decreaseQuantityInCart,
        removeProductCart
    } = props

    return (
            <CardPayment>
                <ImagemProduto src={camiseta.image} alt="Imagem camiseta"/>  
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
                        <button onClick={()=>removeProductCart(camiseta)}>Remove</button>
                    </QuantityRemove>
                    </PriceCard>
                    
                
            </CardPayment>
    )
}
