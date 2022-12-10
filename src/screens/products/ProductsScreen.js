import Products from "../../assets/products.json";
import { Main } from "./ProductsScreen.styled.js";
import ProductCard from "../../components/ProductsCard/ProductsCard";

function ProductsScreen(props) {

  const { addToCart }= props




return (
    <Main>
      <section>
      <h1>Products</h1>
      <hr/>
      {
          Products
          .map((product) => (
          <ProductCard 
            product={product}
            key={product.id}
            addToCart={addToCart}
            isOnProductsScreen={true}
          />
          ))
      }
      </section>
    </Main>
  );
}

export default ProductsScreen;
