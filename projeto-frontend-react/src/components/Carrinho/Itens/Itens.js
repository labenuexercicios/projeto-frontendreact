import { ItensContainer } from "./ItensStyle"

export function Itens() {
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
          <td>Nome do produto</td>
          <td>R$ 0,00</td>
          <td>
            <button>Remover</button>
          </td>
        </tr>
      </ItensContainer>

      <h4>Valor Total:</h4>
    </div>
  );
}
