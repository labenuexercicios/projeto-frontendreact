import React from 'react';

import {
  ProductCardContainer,
  ProductImage,
  ProductName,
  ProductPrice
} from './productCardStyle';

const ProductCard = ({ product }) => {
  return (
    <ProductCardContainer>
      <ProductImage src={product.imageUrl} alt={product.name} />
      <ProductName>{product.name}</ProductName>
      <ProductPrice>R$ {product.price.toFixed(2)}</ProductPrice>
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
