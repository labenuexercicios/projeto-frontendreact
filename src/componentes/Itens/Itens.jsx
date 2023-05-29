import { Texto2 } from "../Filtro/FiltroStyle";
import { Texto3, Texto4, HR, ButtonRemoveCard, ItenContainer, InfoCart } from "./ItensStyle";

function Itens(props) {
  const { cart, handleRemoveFromCart } = props;

  const itemList = cart.map((item) => (
    <p key={item.title}>
      <ItenContainer>
        <InfoCart>
          <Texto2>
            {item.title} <Texto4> x {item.quantity} </Texto4>
          </Texto2>
          <Texto3>
            Preço: R$ <Texto4> {item.price.toLocaleString("pt-BR")} </Texto4>
          </Texto3>
        </InfoCart>
        <div>
          <ButtonRemoveCard onClick={() => handleRemoveFromCart(item)}>
            <span class="material-symbols-outlined">close</span>
          </ButtonRemoveCard>
        </div>
      </ItenContainer>
      <HR></HR>
    </p>
  ));

  return (
    <div>
      <p>{itemList}</p>
    </div>
  );
}

export default Itens;
