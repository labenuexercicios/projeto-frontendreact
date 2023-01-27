import { MainStyled } from "./Style";
import Promotions from "./promotions/Promotions";
import Products from "./products/Products";

export default function Main(props) {
  return (
    <MainStyled>
      {props.pageFlow === "promotions" ? (
        <Promotions
          pageFlow={props.pageFlow}
          setPageFlow={props.setPageFlow}
          products={props.products.filter(function (item) {
            return item.discount > 0;
          })}
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
