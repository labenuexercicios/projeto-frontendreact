import React from 'react';

import {
  ProductCardContainer,
  ProductImage,
  ProductName,
  ProductPrice,
  ProductDescription,
  AddToCartButton
} from './productCardStyle';

const ProductCard = ({ product, onAddToCart }) => {
  const handleAddToCart = () => {
    onAddToCart(product);
  };
  return (
    <ProductCardContainer>
      <ProductImage src={product.image} alt={product.name} />
      <ProductName>{product.name}</ProductName>
      <ProductDescription>{product.description}</ProductDescription>
      <ProductPrice>R$ {product.price.toFixed(2)}</ProductPrice>
      <AddToCartButton onClick={handleAddToCart}>Comprar</AddToCartButton>
    </ProductCardContainer>
  );
};


// Antes de passar por props:
//const ProductCard = () => {
//   return (
//   <>
//       <Container>
//         <p>ProductCard</p>
//         <div className= "cards">
//           <img src="https://img.elo7.com.br/product/original/3464BAA/camiseta-disco-voador-camisa-extraterrestre-nave-espacial-et-camiseta-disco-voador.jpg"/>
//         </div> 
//         <div className= "description">
//           <p>Nome:{name}</p>
//             <p>Descrição:</p>
//             <p>Preço:{price}</p>
//             <button>Adicionar ao carrinho</button>
//         </div>
//     </Container>
//   </>
//   )
// }

export default ProductCard
