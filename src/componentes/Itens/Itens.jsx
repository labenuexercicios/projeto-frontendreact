import "./Itens.css";

function Itens(props) {
  const { cart, handleRemoveFromCart } = props;

  const itemList = cart.map((item) => (
    <li key={item.title}>
      <div className="item-carrinho">
        <img src={item.image} alt={item.title} />
        <div className="item-texto">
          <h4>{item.title}</h4>
          <p>Quantidade: {item.quantity}</p>
          <p>Preço: R$ {item.price.toFixed(2)}</p>
          <button onClick={() => handleRemoveFromCart(item)}>Remover</button>
        </div>
      </div>
    </li>
  ));

  return (
    <div className="produtos-carrinho">
      <h3>Itens</h3>
      <ul>{itemList}</ul>
    </div>
  );
}

export default Itens;
