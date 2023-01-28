import { MainStyled } from "./Style";
import Products from "./products/Products";
import Home from "./home/Home";

export default function Main(props) {
  return (
    <MainStyled>
      {props.pageFlow === "promotions" ? (
        <Home
          pageFlow={props.pageFlow}
          setPageFlow={props.setPageFlow}
          products={props.products}
        />
      ) : (
        <Products
          pageFlow={props.pageFlow}
          setPageFlow={props.setPageFlow}
          products={props.products.filter(function (item) {
            return item.discount > 0;
          })}
        />
      )}
    </MainStyled>
  );
}
