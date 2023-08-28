import { ItensContainer } from "./ItensStyle"

export function Itens(props) {

  console.log(props.name, props.value, props.amount);
  return (
    <div>
      <h3>Itens</h3>
      <ItensContainer>
        <tr>
          <th>Quantidade</th>
          <th>Descrição</th>
          <th>Valor</th>
          <th>Remover</th>
        </tr>
        <tr>
          <td>0 unidades</td>
          <td>{props.name}</td>
          <td>R$ {props.value}</td>
          <td>
            <button>Remover</button>
          </td>
        </tr>
      </ItensContainer>

      <h4>Valor Total: {props.amount}</h4>
    </div>
  );
}
