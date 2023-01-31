import { useParams } from "react-router-dom";
import ProductsViewer from "../components/Products/ProductsViewer";

export default function Products() {
  const pathParams = useParams();
  return (
    <div>
      <ProductsViewer
        searchKey={pathParams.searchKey}
        idCategory={pathParams.idCategory}
      />
    </div>
  );
}
