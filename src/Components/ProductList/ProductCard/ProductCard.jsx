import React from 'react';
import { CardContainer, ProductImage, CardInfo, ProductName, ProductPrice, AddToCartButton } from './ProductCardStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';   

export default function ProductCard(props) {
  const { product, onAddProductToCart, imagesUrl} = props;

  const handleAddToCart = () => {
    if (onAddProductToCart && typeof onAddProductToCart === 'function') {
      onAddProductToCart(product.id);
    }
  };

  return (
    <CardContainer>
      <ProductImage img src={imagesUrl} alt={product.name} />
      <CardInfo>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>R${product.value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</ProductPrice>
        <AddToCartButton onClick={handleAddToCart}>
          <FontAwesomeIcon icon={faShoppingCart} />
          Comprar
        </AddToCartButton>
      </CardInfo>
    </CardContainer>  
  );
}
