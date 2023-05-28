import { ParagraphStyle } from "./ItemsStyle";

export function Items({ name, value, quantify, /*imageUrl*/ id, remove }) {
  return (
    <>
      {/* <img src={imageUrl} alt="" /> */}

      <ParagraphStyle>Nome:{name}</ParagraphStyle>
      <ParagraphStyle>Quantidade:{quantify}</ParagraphStyle>
      <ParagraphStyle>Valor: R${(value * quantify).toFixed(2)}</ParagraphStyle>
      <button onClick={() => remove(id)}>Remover</button>
    </>
  );
}
