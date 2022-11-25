import { ContainerBag, ColumnBag } from "./styles";

function Cart(props) {

  const { cartItems, addCart, onRemove } = props;

  return (

    <ContainerBag className="container-bag">
      <h1 className="h1">Oi :) </h1>

      {cartItems.map((item) => {
        return (
        <ColumnBag key={item.id} className="row">

          <div>{item.name}</div>

          <div className="buttons">
            <button onClick={() => addCart(item)} className="add">
              +
            </button>
            <button onClick={() => onRemove(item)} className="remove">
              -
            </button>
          </div>

          <div className="colum text right">
            {item.qty} x R${item.price.toFixed(2)}
          </div>
        </ColumnBag>
          )
      })}

      <div>{cartItems.length === 0 && <div> Sua sacola está vazia </div>}</div>

    </ContainerBag>
  );
}

export default Cart;
