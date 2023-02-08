import { useParams } from "react-router-dom";
import ProductViewer from "../../components/products/product/ProductViewer";
import { ContainerStyled } from "./Style";

export default function Product(props) {
  const pathParams = useParams();
  return (
    <ContainerStyled>
      <ProductViewer idProduct={pathParams.idProduct} />
    </ContainerStyled>
  );
}
