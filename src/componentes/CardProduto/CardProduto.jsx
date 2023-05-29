import { ButtonBuyCard, CardProdutoContainer, ImageCard, InfoCard, PriceCard } from './CardProdutosStyle'
 
function CardProduto(props) {
  const { image, title, price, handleAddToCart } = props;

  const handleAddClick = () => {
    handleAddToCart({ image, title, price, quantity: 1 });
  };

  return (
    <CardProdutoContainer>
      <ImageCard src={image} alt={title} />
      <InfoCard>
        <h3>{title}</h3>
        <PriceCard>R${price.toFixed(2)}</PriceCard>
        <ButtonBuyCard onClick={handleAddClick}>
          Adicionar ao carrinho
        </ButtonBuyCard>
      </InfoCard>
    </CardProdutoContainer>
  );
}

export default CardProduto;
