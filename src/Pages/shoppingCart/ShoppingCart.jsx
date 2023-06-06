import { useParams } from "react-router-dom";
import ShoppingCartViewer from "../../components/shoppingCart/ShoppingCartViewer";

import { ContainerStyled } from "./Style";

export default function ShoppingCart(props) {
  const pathParams = useParams();
  return (
    <ContainerStyled>
      <ShoppingCartViewer
        idProduct={pathParams.idProduct}
        shopingCartNumber={props.shopingCartNumber}
        setShopingCartNumber={props.setShopingCartNumber}
      />
    </ContainerStyled>
  );
}
