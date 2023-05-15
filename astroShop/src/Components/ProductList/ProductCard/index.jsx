/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import moletomNasa from '../../../assets/img/blusa1.png'
import { AddToCartButton, Card, CardImage, CardPrice, CardTitle } from "./styles";

const ProductCard = ({product}) => {
  console.log(product)
  return (
    <>
    
    <Card>
      <CardImage src={product.imageUrl} alt={product.name} />
      <CardTitle>{product.name}</CardTitle>
      <CardPrice>R${product.value}</CardPrice>
      <AddToCartButton>Adicione ao carrinho</AddToCartButton>
    </Card>
    
    </>
  )
}

export default ProductCard;