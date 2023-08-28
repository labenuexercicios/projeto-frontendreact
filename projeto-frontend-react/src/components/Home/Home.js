import { useState } from "react";
import { produtosLista } from "../../assents/produtosLista";
import { HomeCabecalho, HomeContainer, HomeProdutos } from "./HomeStyle";
import { Produtos } from "./Produtos/Produtos";

export function Home(props) {
  const [ordination, setOrdination] = useState("");

  console.log(ordination, props.cart, props.amount, props.produtosLista);

  const produto = props.produtosLista.map((item) => (
    <Produtos
      id={item.id}
      name={item.name}
      value={item.value}
      imageUrl={item.imageUrl}
    />
  ));

    return (
    <HomeContainer>
      <h2>Home</h2>
      <HomeCabecalho>
        <h5>Quantidade de produtos: </h5>
        <p>{props.produtosLista.length} produto(s)</p>
        <h5>Ordenação:</h5>
        <select value={ordination} onChange={(e) => setOrdination(e.target.value)}>
          <option>Crescente</option>
          <option>Decrescente</option>
        </select>
      </HomeCabecalho>
      <HomeProdutos>{produto}</HomeProdutos>
    </HomeContainer>
  );
}
