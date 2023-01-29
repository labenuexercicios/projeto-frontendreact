import { ProductsContainerStyled } from "./Style";
import { ProductsStyled } from "./Style";
import { PoductStyled } from "./Style";
import { Img } from "./Style";

export default function ProductsViewer(props) {
  let products = JSON.parse(localStorage.getItem("products"));

  if (
    props.searchKey !== null &&
    props.searchKey !== undefined &&
    props.searchKey.trim() !== ""
  ) {
    products = products.filter(function (item) {
      return item.name == props.searchKey;
    });
  }

  if (props.idCategory !== null && props.idCategory !== undefined) {
    products = products.filter(function (item) {
      return item.idCategory == props.idCategory;
    });
  }

  return (
    <ProductsContainerStyled>
      <ProductsStyled>
        {products.map((product) => (
          <PoductStyled key={product.id}>
            {product.name}
            <Img src={product.images[0]} alt={product.description} />
          </PoductStyled>
        ))}
      </ProductsStyled>
    </ProductsContainerStyled>
  );
}
