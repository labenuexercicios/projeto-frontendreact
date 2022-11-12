import React from 'react'
import { CardContainer } from './Card.styled'
import saleImg from '../../assets/sale.svg'
import { formatter } from '../../uteis/formatterCurrency';




function Card(props) {
    const {
        product,
        addToCart,
        currCart,
        addQuantityToProductOnCart,
        reduceQuantityToProductOnCart,

    } = props;
    const priceFormat = formatter.format(product.price)
    const priceOffFormat = formatter.format(product.price * (1 - (product.offPrice) / 100))
    const priceDiveded = formatter.format((product.price / 5))


    const productInCart = currCart.find((productCard) => productCard.id === product.id)
   





    return (


        <CardContainer>

            <div className='image-product-div'>
                {product.offPrice ? //ternario
                    <div className='label-off'>
                        <img src={saleImg} alt="off label" />
                        <h3>{product.offPrice}%</h3>
                    </div> : ''}

                <img src={product.image[0]} alt="Product Image" />
            </div>

            <h2>{product.name}</h2>

            <div className='price'>
                {product.offPrice ? <p className='price-full'>{priceFormat}</p> : ""}
                <p className='price-discount'>{priceOffFormat}</p>
                <p className='p-cash'>á vista </p>
                <p className="payment-option">ou <span>5x</span> de {priceDiveded}</p>
            </div>
            {productInCart ?
                <div className='btn-group'>
                    <button onClick={() => reduceQuantityToProductOnCart(productInCart)}>-</button>
                    <p>{productInCart.quantity}</p>
                    <button onClick={() => addQuantityToProductOnCart(productInCart)}>+</button>
                </div>

                : <button onClick={() => addToCart(product)}>Adicionar ao carrinho</button>

            }

        </CardContainer>
    )
}
export default Card;