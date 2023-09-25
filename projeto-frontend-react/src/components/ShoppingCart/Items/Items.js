import {
  ItemsContainer,
  ItemsContent,
  ItemsPrice,
  ItemsTitle,
} from "./ItemsStyle";
import { BsCartDashFill } from "react-icons/bs";
import formatCurrency from "../../../utils/formatCurrency";

export function Items(props) {
  // console.log(props.name, props.value, props.amount);

  // const { cart, amount } = props.states
  const { id, name, value, imageUrl, amount, product } = props;
  const { deleteProductCart } = props;
  const { productsCart } = props;

  return (
    <section >
      <ItemsContainer>
        <div className="item-image">
          <img src={imageUrl} />
        </div>

        <div className="item-text">
          <h3 title={name}>{name}</h3>
          <p>
            x {amount} <span>{formatCurrency(value, "BRL")}</span>{" "}
          </p>
        </div>
        <button onClick={() => deleteProductCart(product)}>
          <BsCartDashFill />
        </button>
      </ItemsContainer>
    </section>
  );
}
