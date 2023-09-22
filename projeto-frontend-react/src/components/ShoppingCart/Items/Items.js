import { ItemsContainer } from "./ItemsStyle"

export function Items(props) {

  // console.log(props.name, props.value, props.amount);
  
  // const { cart, amount } = props.states
  const { id, name, value, imageUrl } = props
  const { deleteProductCart } = props
  const { productsCart } = props

  return (
    <div>
      <h3>Itens</h3>
      <ItemsContainer>
        <p>{productsCart}</p>
        <tr>
          <th>Quantidade</th>
          <th>Descrição</th>
          <th>Valor</th>
          <th>Remover</th>
        </tr>
        <tr>
          <td>0 unidades</td>
          <td>{name}</td>
          <td>R$ {value}</td>
          <td>
            <button on click={deleteProductCart}>Remover</button>
          </td>
        </tr>
      </ItemsContainer>

      {/* <h4>Valor Total: {amount}</h4> */}
    </div>
  );
}
