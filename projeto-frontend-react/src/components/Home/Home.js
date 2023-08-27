import { useState } from "react";
import { produtosLista } from "../../assents/produtosLista";
import { HomeCabecalho, HomeContainer, HomeProdutos } from "./HomeStyle";
import { Produtos } from "./Produtos/Produtos";

export function Home(props) {
  const { id, name, value, imageUrl } = produtosLista;

  const [ordination, setOrdination] = useState ("")

  return (
    <HomeContainer>
      <h2>Home</h2>
      <HomeCabecalho>
        <h5>Quantidade de produtos: </h5>
        <p>{produtosLista.length} produto(s)</p>
        <h5>Ordenação:</h5>
        <select id="ordination" value={ordination}>
          <option>Crescente</option>
          <option>Decrescente</option>
        </select>
      </HomeCabecalho>
      <HomeProdutos>
        <Produtos
          id={props.id}
          name={props.name}
          value={props.value}
          imageUrl={props.imageUrl}
        />
        <Produtos
          id={props.id}
          name={props.name}
          value={props.value}
          imageUrl={props.imageUrl}
        />
        <Produtos
          id={props.id}
          name={props.name}
          value={props.value}
          imageUrl={props.imageUrl}
        />
      </HomeProdutos>
    </HomeContainer>
  );
}
