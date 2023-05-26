import "./items.css";

export function Items(props) {
  return (
    <div className="containerItems">
      <div className="containerItems-first">
        <input type="text" id="quantity" value={props.item.quantity} />
        <p>{props.item.name}</p>
      </div>
      <div className="containerItems-second">
        <p> R$ {props.item.value.toFixed(2)}</p>
        <button onClick={() => props.removeItem(props.item)}>Remover</button>
      </div>
    </div>
  );
}
