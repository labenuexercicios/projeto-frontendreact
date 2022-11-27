import brinquedos from "../../assets/products.json";
import { SortProducts } from "./style";

function Sort(props) {
  return (
    <SortProducts>
      <h4>Quantidade de produtos: {brinquedos.length}</h4>
      <label for="sortingParameter">
        Ordenar por:
        <select
          value={props.order}
          onChange={(event) => {
            props.setOrder(event.target.value);
          }}
        >
          <option value={"crescente"}>Crescente</option>
          <option value={"decrescente"}>Decrescente</option>
        </select>
      </label>
    </SortProducts>
  );
}

export default Sort;