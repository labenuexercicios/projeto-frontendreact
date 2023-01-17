import produtosGeral from "../../assets/products.json";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Main } from "./ProductsScreen.styled";

function ProductScreen(props) {
  const { addToCart, filterText, order, priceOrder } = props;

  const filterProductsByText = () => {
    let stateVariables = order + priceOrder;
    return produtosGeral
      .filter((product) =>
        product.name.toLowerCase().includes(filterText.toLowerCase())
      )
      .sort(function (a, b) {
        switch (stateVariables) {
          case "ascasc":
            if (a.name < b.name && a.price < b.price) {
              return -1;
            }
            if (a.name > b.name && a.price > b.price) {
              return 1;
            }
            break;
          case "ascdesc":
            if (a.name > b.name && a.price < b.price) {
              return -1;
            }
            if (a.name < b.name && a.price > b.price) {
              return 1;
            }
            break;
          case "descasc":
            if (a.name > b.name && a.price < b.price) {
              return -1;
            }
            if (a.name < b.name && a.price > b.price) {
              return 1;
            }
            break;
          case "descdesc":
            if (a.name > b.name && a.price > b.price) {
              return -1;
            }
            if (a.name < b.name && a.price < b.price) {
              return 1;
            }
            break;

          default:
        }
      });
  };

  return (
    <Main>
      <section>
        <h1>Produto</h1>
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
export default ProductScreen;
