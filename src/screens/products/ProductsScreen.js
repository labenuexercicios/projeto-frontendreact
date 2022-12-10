import Products from "../../assets/products.json";
import { Main } from "./ProductsScreen.styled.js";
import ProductCard from "../../components/ProductsCard/ProductsCard";

function ProductsScreen(props) {
  const { addToCart, filterText } = props;

  const filterProductsByText = () => {
    return Products.filter((product) =>
      product.name.toLowerCase().includes(filterText.toLowerCase())
    );
  };

  return (
    <Main>
      <section>
        <div>
          <h1>Products</h1>
        </div>
        <hr />
        {filterProductsByText().map((product) => (
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
