import ProductCard from '../ProductCard/ProductCard'
import { HomeStyle, HomeHeader, ProductCardShow } from './styled';

const Home = () => {
  return (
    <HomeStyle>
      <HomeHeader>
        <p>Quantidade de produtos:</p>
        <label for='order'>Ordenação:</label>
        <select name="order" id="order">
          <option value="" selected="selected">Crescente</option>
          <option value="" selected="selected">Decrescente</option>
          <option value="" selected="selected">Mais caros</option>
          <option value="" selected="selected">Mais baratos</option>
        </select>
      </HomeHeader>
      <ProductCardShow>
        <ProductCard/>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
      </ProductCardShow>
    </HomeStyle>
    
    
    );
}

export default Home