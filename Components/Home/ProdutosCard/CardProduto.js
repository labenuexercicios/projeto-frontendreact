import {
  ButtonCard,
  CardDiv,
  ImagedDiv,
  ImgProduct,
  ProductRows,
  TextCard
} from "./ProductStyles";

const ProductCard = (props) => {
  return (
    <ProductRows>
    <CardDiv>
      <ImagedDiv>
        <ImgProduct src={props.imagem} />
      </ImagedDiv>
      <TextCard>{props.name}</TextCard>
      <TextCard>R$ {props.value}</TextCard>
      <ButtonCard onClick={props.onClick}>Adicionar ao Carrinho</ButtonCard>
    </CardDiv>
    </ProductRows>
  );
};

export default ProductCard;
