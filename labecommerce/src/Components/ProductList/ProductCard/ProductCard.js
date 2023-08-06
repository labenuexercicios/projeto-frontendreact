import { CardContainer } from "./ProductCardStyle";

const ProductCard = ({ name, value, imgUrl }) => {
  return (
    <CardContainer>
      <div id="card">
        <div id="img-container">
          <img id="img" src={imgUrl} alt={name} />
        </div>
      </div>
      <div id="descricao">
        <div id="txt">
          <p>{name}</p>
          <p>{value}</p>
        </div>
        <div id="btn">
          <button>Adicionar ao carrinho</button>
        </div>
      </div>
    </CardContainer>
  );
};

export default ProductCard;
