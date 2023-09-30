import { productList } from "../../../assets/productList";
import { CardContainer } from "./ProductCardStyle";

const ProductCard = ({ name, value, imgUrl, addToCart, id }) => {
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
          <p>₿ {value.toFixed(2)}</p>
        </div>
        <div id="btn">
          <button id='botao1' onClick={() => addToCart(id) }>Adicionar ao carrinho</button>
        </div>
      </div>
    </CardContainer>
  );
};

export default ProductCard