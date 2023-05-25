import { ModifiersStyle } from "./style";
import Button from "../../../../Shared/Button";

export default function Modifiers({ event, quantity, handleAddToCart }) {
  return (
    <>
      <ModifiersStyle>
        <Button text={"-"} event={event} />
        <p>{quantity}</p>
        <Button text={"+"} event={event} />
        {quantity >= 1 ? (
          <Button text={"Add"} event={handleAddToCart} />
        ) : (
          <Button disabled={true} text={"Add"} event={handleAddToCart} />
        )}
      </ModifiersStyle>
    </>
  );
}
