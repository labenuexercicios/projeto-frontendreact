import { TotalStyle } from "./style";

export default function Total({ total }) {
  return (
    <>
      <TotalStyle>
        <h3>Total</h3>
        <p>{total}$</p>
      </TotalStyle>
    </>
  );
}
