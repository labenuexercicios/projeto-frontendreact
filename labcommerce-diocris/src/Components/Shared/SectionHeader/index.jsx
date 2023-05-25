import Button from "../Button";
import { LineHeaderWrapper } from "./style";

export default function LineHeader({ mainText, text, event, cart, cartCount }) {
  return (
    <>
      <LineHeaderWrapper cart={cart}>
        <div>
          <h2>{mainText}</h2>
          {cartCount > 0 && <span>{cartCount}</span>}
        </div>
        {text && <Button text={text} event={event} />}
      </LineHeaderWrapper>
    </>
  );
}
