import { CartContainer } from "./styles";
import CartCard from "../CartCard/Cartcard";

export default function Cart(props) {

  let cartCards = [];
  if (props.cartData.length > 0) {
    cartCards = props.cartData.map((item) => {
      return (
        <CartCard
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          img={item.img}
          toReal = {props.toReal}
          handleRemove={props.handleRemove}
          getTotal = {props.getTotal}
        />
      );
    });
  }

  return (
    <CartContainer>
      <h2>Carrinho:</h2>
      {cartCards}
      <div className={props.cartData.length > 0? "hidden" : null}>
        <img className="oops" src="./images/oops.png" alt="oops"></img>
      <p>Nada ainda!</p>
      </div>
      <p className={props.cartData.length > 0? "total" : "total hidden"}>{props.toReal(props.total)}</p>
    </CartContainer>
  );
}
