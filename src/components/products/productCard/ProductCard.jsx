import {
  ProductTitleStyled,
  ProductPriceStyled,
  ProductDescriptionStyled,
  DataStyled,
  Img,
  ProductPrice,
  ProductPriceDiscount,
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
      <Img src={props.product.images[0]} alt={props.product.description} />
      <ProductTitleStyled>{props.product.name}</ProductTitleStyled>
      <StarsRating rating={props.product.rating} />
      <ProductDescriptionStyled>
        <div>{props.product.description}</div>
        <br />
        <ProductPriceStyled>
          <ProductPrice>U$ {props.product.price.toFixed(2)}</ProductPrice>for{" "}
          <ProductPriceDiscount>
            U${" "}
            {(
              props.product.price -
              props.product.price * Number("0." + props.product.discount)
            ).toFixed(2)}
          </ProductPriceDiscount>
        </ProductPriceStyled>
      </ProductDescriptionStyled>
    </DataStyled>
  );
}
