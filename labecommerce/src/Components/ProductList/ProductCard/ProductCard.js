import React from 'react'
import{Container} from './productCardStyle'




function ProductCard({product, selectedProduct}) {
  // const { product } = props;
  
  console.log (product.imagem)
  return (
    <>
   
  <Container>
    <h2>{product.name}</h2>
    <img src={product.image} alt={product.name} />
    <p>{product.description}</p>
    <p>Price: R${product.price.toFixed(2)}</p>
    <button>Adicionar ao carrinho</button>
   
  </Container>

  
  </>
  )
}
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
