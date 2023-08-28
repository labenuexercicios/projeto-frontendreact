import { ItemContainer } from "./ItemsStyle";

const Items = ({ amount, name }) => {
  return (
    <ItemContainer>
      <p>{amount} {name}</p>
    </ItemContainer>
  );
}

export default Items;
