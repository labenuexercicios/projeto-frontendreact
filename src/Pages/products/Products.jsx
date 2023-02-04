import { useParams } from "react-router-dom";
import ProductsViewer from "../../components/Products/ProductsViewer";
import { ContainerStyled } from "./Style";

export default function Products() {
  const pathParams = useParams();
  return (
    <ContainerStyled>
      <ProductsViewer
        searchKey={pathParams.searchKey}
        idCategory={pathParams.idCategory}
      />
    </ContainerStyled>
  );
}
