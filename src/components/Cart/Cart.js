import { ContainerBag } from "./styles";

function Cart(props) {

  const { cartItems, addCart, onRemove } = props;

  return (
    <ContainerBag className="container-bag">
      <h1>Itens</h1>
      <div>{cartItems.length === 0 && <div> Sua sacola está vazia </div>}</div>
      {cartItems.map((item) => {
        <div>
          <div key={item.id} className="row">

            <div>{item.name}</div>

            <div className="botoes">
              <button onClick={() => addCart(item)} className="add">
                +
              </button>
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>
            </div>

            <div className="colum text right">
              {item.qty} x R${Number(item.price).toFixed(2)}
            </div>

          </div>;
        </div>
      })}
    </ContainerBag>
  );
}

export default Cart;
