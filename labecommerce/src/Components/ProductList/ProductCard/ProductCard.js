
import { ProductCardStyle, ProductCardImage, ProductCardDetails } from "./styled";



const ProductCard = (props) => {
  
  return (
    <ProductCardStyle>
        
        
          <ProductCardImage src={props.productsList[0].imageUrl} alt= 'produto 1'/>
          <ProductCardDetails>
            <p>{props.productsList[0].name}</p>
            <p>R$:{props.productsList[0].value}</p>
            <button>Adicionar ao carrinho</button>
          </ProductCardDetails>
         
      </ProductCardStyle>
    );
}

export default ProductCard