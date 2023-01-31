import { useParams } from "react-router-dom";
import ProductViewer from "../components/products/product/ProductViewer";

export default function Product() {
  const pathParams = useParams();
  return (
    <div>
      <ProductViewer idProduct={pathParams.idProduct} />
    </div>
  );
}
