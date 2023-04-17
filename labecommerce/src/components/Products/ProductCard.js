import React from 'react'
import { AddToCartButton, CardContainer, CardInfo, ImageProducts } from './styledProducts'


export class ProductCard extends React.Component {
  render() {
    const product = this.props.product
    return <CardContainer>
      <ImageProducts src={product.photo}/>
      <CardInfo>
        <p>{product.name}</p>
        <p>R${product.price},00</p>
        <AddToCartButton onClick={() => this.props.onAddProductToCart(product.id)}>
          Adicionar ao carrinho
        </AddToCartButton>
      </CardInfo>
    </CardContainer>
  }
}
