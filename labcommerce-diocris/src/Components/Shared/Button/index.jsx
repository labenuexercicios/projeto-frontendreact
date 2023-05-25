import { ButtonStyle } from "./style";

export default function Button({ text, event, disabled, erase, payment }) {
  return (
    <>
      <ButtonStyle
        payment={payment}
        erase={erase}
        disabled={disabled}
        onClick={event}
      >
        {text}
      </ButtonStyle>
    </>
  );
}
