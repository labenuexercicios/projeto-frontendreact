
import { ProductCardStyle, ProductCardImage, ProductCardDetails } from "./styled";



const ProductCard = () => {
    return (
      <ProductCardStyle>
        
          <ProductCardImage/>
          <ProductCardDetails>
            <p>Nome do Produto:</p>
            <p>Valor:</p>
            <button>Adicionar ao carrinho</button>
          </ProductCardDetails>
         
      </ProductCardStyle>
    );
}

export default ProductCard