import { CardCaixa } from "./ProductCardStyle";

export function ProductCard() {
  console.log("produto");
  return (
    <>
      <CardCaixa>
        <p>Product Card</p>
        <p>Nome do produto</p>
        <p>Valor do produto</p>
        <button>Adicionar item</button>
      </CardCaixa>
    </>
  );
}
