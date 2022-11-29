import React from 'react'
import { CardCamiseta, ImagemProduto, DetalheProduto, PriceCard, QuantityProduct, DescricaoProduto, QuantityRemove } from './CardCart.styled'
import { priceFormatter } from '../../utils/priceFormatter'

export const CardCart = (props) => {

    const {camiseta,
        increaseQuantityInCart,
        decreaseQuantityInCart,
        removeProductCart
    } = props

    return (
            <CardCamiseta key={camiseta.id}>
                <ImagemProduto src={camiseta.image} alt="Imagem camiseta"/>  
                <DetalheProduto>
                    <div>
                    <h3>{camiseta.title}</h3>
                    <p>***** {camiseta.rating}</p>
                    <p>Tamanho?????????</p>
                    {/* {camiseta.map((tamanhoCamiseta)=>{
                        return <span>{tamanhoCamiseta.size}</span>
                    })} */}
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
                    
                
            </CardCamiseta>
    )
}
