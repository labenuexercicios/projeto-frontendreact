import {
  ProductTitleStyled,
  ProductPriceStyled,
  ProductDescriptionStyled,
  DataStyled,
  Img,
} from "./Style";
import { StarsRating } from "../../starsRating/StarsRating";
import { useNavigate } from "react-router-dom";
import { goToProduct } from "../../../Router/Coordinator";

export default function ProductCard(props) {
  const navigate = useNavigate();
  function handleProductClick() {
    goToProduct(navigate, props.product.id);
  }

  return (
    <DataStyled onClick={() => handleProductClick()}>
      <ProductTitleStyled>{props.product.name}</ProductTitleStyled>
      <Img src={props.product.images[0]} alt={props.product.description} />
      <StarsRating rating={props.product.rating} />
      <ProductDescriptionStyled>
        <div>{props.product.description}</div>
        <br />
        <ProductPriceStyled>
          U$ {props.product.price} ({props.product.installment} X{" "}
          {Number(props.product.price) / Number(props.product.installment)})
        </ProductPriceStyled>
      </ProductDescriptionStyled>
    </DataStyled>
  );
}
