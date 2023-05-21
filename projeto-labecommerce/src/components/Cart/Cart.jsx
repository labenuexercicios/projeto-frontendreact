import { Items } from "../Items/Items";
import { HiShoppingCart } from "react-icons/hi";

export function Cart( {amount, setAmount, cart, setCart, } ) {
  const purchaseValue = () =>{ // ! Valor da compra

  }

  function removeItem(elemento){ // OKAY          
    const updateCart = cart.filter((item)=> item.id !== elemento.id)
    setCart(updateCart)
  }

  return (
    <div className="containerCart">
      <div className="first">
        <h1>Carrinho</h1>
        <HiShoppingCart
          src={HiShoppingCart}
          alt="Carinho de Compras"
          className="img"
        />
      </div>
      <div className="second">
        {cart
          .map((item, index)=>{
            console.log(item)
            return(
            <>
                <Items key={index} item={item} removeItem={removeItem} />
            </>
          )
        })}
        <p>Valor da Compra: {} </p>
      </div>
    </div>
  );
}
