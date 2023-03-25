import { CartCardContainer } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

function CartCard(props) {
  const [unit, setUnit] = useState(1);

  const addUnit = () => {
    setUnit(unit + 1);
    // setPrice(props.price * unit);
  };
  
  const removeUnit = () => {
    if (unit > 1) {
      setUnit(unit - 1);
    }
  };
  
  useEffect(() => {
    props.getTotal();
  }, [unit]);

  return (
    <CartCardContainer>
      <button onClick={() => props.handleRemove(props.id)}>
        <FontAwesomeIcon icon="fa-solid fa-xmark" />
      </button>
      <img className="cart-preview" src={props.img} alt={props.name}></img>
      <div className="nameQnt">
        <p>{props.name}</p>
        <p>{unit} un.</p>
      </div>
      <div className="nameQnt">
        <p className="proPrice" value={props.price * unit}>
          {props.toReal(props.price * unit)}
        </p>
        <button className="plus" onClick={addUnit}>
          +
        </button>
        <button onClick={removeUnit}>-</button>
      </div>
      <hr />
    </CartCardContainer>
  );
}

export default CartCard;
