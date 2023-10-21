import { ButtonItems, ItemsDiv, ItemsText } from "./ItensStyled";

const Items = (props) => {
  return (
    <div>
      <ItemsDiv>
        <ItemsText>{props.quantity}x</ItemsText>
        <ItemsText>{props.name}</ItemsText>
        <ButtonItems onClick={props.removeProduct}>REMOVER</ButtonItems>
      </ItemsDiv>
    </div>
  );
};

export default Items;
