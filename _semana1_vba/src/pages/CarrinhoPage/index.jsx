import { useContext } from "react";
import CardCarrinho from "../../components/CardCarrinho";
import { GlobalContext } from "../../contexts/GlobalContext";
import { CarrinhoPageStyled } from "./styled";

export default function CarrinhoPage() {
  const context = useContext(GlobalContext);
  const { carrinho } = context;

  const total = carrinho.reduce(
    (acc, produto) => produto.valor * produto.quantidade + acc,
    0
  );

  return (
    <CarrinhoPageStyled>
      <h2 className="carrinho">Carrinho</h2>
      <section className="container-produtos">
        <hr />
        {carrinho.map((produto) => (
          <CardCarrinho produto={produto} key={produto.id} />
        ))}
        <hr />
      </section>
      <section className="total">
      <h3>Total Produtos: R$ {total.toFixed(2).replace(".", ",")}</h3>
      </section>
    </CarrinhoPageStyled>
  );
}
