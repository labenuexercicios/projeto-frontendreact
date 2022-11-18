function Cart(props) {
  const { cartItems, onAddCart, onRemove } = props;
  return (
    <asside className="Sacola">
      <h1>Itens</h1>
      <div>{cartItems.length === 0 && <div> Sua sacola está vazia </div>}</div>
      {cartItems.map((item) => {
        <div key={item.id} className="row">
          <div>{item.name}</div>
          <div>
            <button onClick={() => onAddCart(item)} className="add">
              +
            </button>
            <button onClick={() => onRemove(item)} className="remove">
              -
            </button>
          </div>
          <div className="colum text right">
            {item.qty} x R${item.price.toFixed(2)}
          </div>
        </div>;
      })}
    </asside>
  );
}

export default Cart;
