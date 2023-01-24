import Products from "../../assets/products.json";
import { Main } from "./ProductsScreen.styled.js";
import ProductCard from "../../components/ProductsCard/ProductsCard";

function ProductsScreen(props) {
  const { addToCart, query, valorMin, valorMax } = props;

  return (
    <Main>
      <section>
        <div>
          <h1>Products</h1>
        </div>
        <hr />
        {Products.filter((Products) => {
          return Products.name.includes(query);
        })
          .filter((Products) => {
            return Products.value >= valorMin;
          })
          .filter((Products) => {
            return Products.value <= valorMax;
          })
          .map((product) => (
            <ProductCard
              product={product}
              key={product.id}
              addToCart={addToCart}
              isOnProductsScreen={true}
            />
          ))}
      </section>
    </Main>
  );
}

export default ProductsScreen;
