import { CardCaixa, CardTextCaixa, ImageCaixa } from "./ProductCardStyle";

export function ProductCard() {
  console.log("produto");
  return (
    <>
      <CardCaixa>
        <ImageCaixa />
        <CardTextCaixa>
          <p>Nome do produto</p>
          <p>Valor do produto</p>
          <button>Adicionar item</button>
        </CardTextCaixa>
      </CardCaixa>
    </>
  );
}
