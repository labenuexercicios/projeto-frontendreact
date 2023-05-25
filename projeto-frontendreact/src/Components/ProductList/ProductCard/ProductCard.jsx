import { productList } from "../../../assents/productList";
import { CardCaixa, CardTextCaixa } from "./ProductCardStyle";

export function ProductCard({ Listadeproduto }) {
  console.log(Listadeproduto);
  return (
    <>
      <CardCaixa>
        <img src={Listadeproduto.imageUrl} />
        <CardTextCaixa>
          <p>{Listadeproduto.name}</p>
          <p>{Listadeproduto.value}</p>

          <button>Adicionar item</button>
        </CardTextCaixa>
      </CardCaixa>
    </>
  );
}
