import moletomNasa from '../../../assets/img/blusa1.png'
import { AddToCartButton, Card, CardImage, CardPrice, CardTitle } from "./styles";

const ProductCard = () => {
  return (
    <>
    
    <Card>
      <CardImage src={moletomNasa} alt="asasas" />
      <CardTitle>oi</CardTitle>
      <CardPrice>R$10,00</CardPrice>
      <AddToCartButton>Adicione ao carrinho</AddToCartButton>
    </Card>
    
    </>
  )
}

export default ProductCard;