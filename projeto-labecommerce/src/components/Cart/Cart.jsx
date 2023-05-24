import { Items } from "../Items/Items";
// import { HiShoppingCart } from "react-icons/hi";

export function Cart(props) {
  function removeItem(elemento){ 
    const updateCart = props.cart.filter((item)=> item.id !== elemento.id)
    props.setCart(updateCart)
  }

  return (
    <div className="containerCart">
      <div className="first">
        <h1>Carrinho</h1>
        {/* <HiShoppingCart
          src={HiShoppingCart}
          alt="Carinho de Compras"
          className="img"
        /> */}
      </div>
      <div className="second">
        {props.cart
          .map((item, index)=>{
            return(
            <>
                <Items key={index} item={item} removeItem={removeItem} />
            </>
          )
        })}
        <p id="amount">Valor da Compra: </p>
      </div>
    </div>
  );
}
