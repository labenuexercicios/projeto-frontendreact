import { ContainerBag, ColumnBag , Resume} from "./styles";

function Cart(props) {
  const { cartItems, addCart, onRemove } = props;

  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0)
  const shippingPrice = itemsPrice > 400.00 ? 0 : 17;
  const totalPrice = itemsPrice + shippingPrice

  return (

    <ContainerBag className="container-bag">
      <h1 className="h1">Carrinho</h1>
      <p className="p">Frete grátis em compras a partir de R$400</p>

      {cartItems.map((item) => {
        return (
          <ColumnBag key={item.id} className="items-and-price">

            <div className="title-product"><strong>{item.name}</strong></div>

            <div className="buttons">
              <button onClick={() => addCart(item)} className="button-add">
                +
              </button>

              <button onClick={() => onRemove(item)} className="button-remove">
                -
              </button>
            </div>

            <div>
              {item.qty} x R${item.price.toFixed(2)}
            </div>

          </ColumnBag>
        )
      })}

      <div className="mensage-cart">
        {cartItems.length === 0 && <div> Olá, astronauta!
          Seu carrinho ainda esta vazio :( </div>}
      </div>

      {cartItems.length !== 0 && (
        <Resume>
          <div className="price-items">
            <div className="title">Preço dos itens</div>
            <div className="div-right">R${itemsPrice.toFixed(2)}</div>
          </div>

          <div className="shipping-items">
            <div className="title">Frete</div>
            <div className="div-right">R${shippingPrice.toFixed(2)}</div>
          </div>

          <div className="total-items">
            <div className="title"><strong>Total</strong></div>
            <div className="div-right"><strong>R${totalPrice.toFixed(2)}</strong></div>
          </div>
        </Resume>
      )}

    </ContainerBag>
  );
}

export default Cart;
