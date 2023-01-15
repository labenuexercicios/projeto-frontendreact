import {
  StyledCart,
  StyledProduct,
  StyledContainerProducts,
} from "./style";
import { BsFillTrashFill } from "react-icons/bs";

export const Cart = ({
  data,
  removeProduct,
  totalPrice,
  pageChange,
  showCart,
}) => {
  return (
    <StyledCart pageChange={pageChange}>
      <div className="topInfo">
        <button onClick={showCart}>X</button>
        <span>Sacola</span>
      </div>

      <StyledContainerProducts> 
        {data.map((elem) => {
          return (
            <StyledProduct key={elem.id}>
              <img src={elem.imageUrl} />
              <div className="containerProduct">
                <span>{elem.name}</span>
                <span>Quantidade:{elem.quantity}</span>
                <span className="spanPrice">
                  R${elem.value * elem.quantity}
                </span>
              </div>
              <div className="btnRemove">
                <button onClick={() => removeProduct(elem)}>
                  <BsFillTrashFill />
                </button>
              </div>
            </StyledProduct>
          );
        })}
      </StyledContainerProducts>

      <div className="bottomInfo">
        <span className="total">Total:</span>
        <span className="price">R${totalPrice(data)}</span>
      </div>
    </StyledCart>
  );
};
