import { ProductCartStyle } from "./style";
import Button from "../../../Shared/Button";

export default function ProductCart({
  name,
  quantity,
  price,
  index,
  updateQuantity,
}) {
  //-- function linked with clicked - button
  //* function  *//
  const subtractQuantity = () => {
    //?? creates new variable that will store quantity subtracting 1 from it on each click, also limiting it to be never less than 0
    const updatedQuantity = Math.max(quantity - 1, 0);
    //?? calls function to set new quantity using index value from .map to identify and changes the specific item
    updateQuantity(index, updatedQuantity);
  };
  //* function  *//
  const increaseQuantity = () => {
    //?? creates new variable that will store quantity adding 1 on it on each click
    const updatedQuantity = quantity + 1;
    //?? calls function to set new quantity using index value from .map to identify and changes the specific item
    updateQuantity(index, updatedQuantity);
  };
  //-- condicional render product if it's quantity is greater than 1 or
  //--do not display
  return (
    <>
      {quantity >= 1 && (
        <ProductCartStyle>
          <div
            style={{
              display: "inline-flex",
              justifyContent: "space-between",
              width: "100%",
              padding: "0.5rem",
            }}
          >
            <p>{quantity}</p>x<p>{name}</p>
            <p>{price * quantity}$</p>
          </div>
          <div
            style={{
              float: "right",
              display: "inline-flex",
            }}
          >
            <Button text={"-"} event={subtractQuantity} />
            <Button text={"+"} event={increaseQuantity} />
          </div>
        </ProductCartStyle>
      )}
    </>
  );
}
