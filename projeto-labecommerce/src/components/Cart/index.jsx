import "./cart.css"
import { useEffect } from "react";
import { Items } from "../Items";
import { HiShoppingCart } from "react-icons/hi";

export function Cart(props) {
  const removeItem = (element) => {
    const haveInCart = props.cart.find((item) => item.id === element.id);
    console.log(haveInCart)

    if (haveInCart.quantity === 1) {
      const updateCart = props.cart.filter((item) => item.id !== element.id);
      props.setCart(updateCart);

      if(props.cart.length === 1){
        localStorage.removeItem("cart")
      }

    } else if (haveInCart.quantity > 1) {
      const updateInCart = props.cart.map((item) => {
        if(item.id === element.id){
          return { ...item, quantity: item.quantity - 1 };
        }
        return item
      });
      props.setCart(updateInCart);
    }
  };

  useEffect(() => {
    // Salvar os itens
    const listCart = JSON.stringify(props.cart);
    if (props.cart.length > 0) {
      localStorage.setItem("cart", listCart);
    }else{
    }
  }, [props.cart]);

  useEffect(() => {
    // Salvar os valor
    let listAmount = 0;
    if (props.cart.length) {
      props.cart.map((item) => {
        return (listAmount += item.quantity * item.value);
      });
      props.setAmount(listAmount);
    } else {
      props.setAmount(0);
    }
  }, [props.cart]);

  useEffect(() => {
    const listCart = localStorage.getItem("cart");
    const listCartArray = JSON.parse(listCart);
    if (listCart) {
      props.setCart(listCartArray);
    } else {
      props.setCart([]);
    }
  }, []);

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
        {props.cart.map((item, index) => {
          return (
            <>
              <Items key={index} item={item} removeItem={removeItem} />
            </>
          );
        })}
        <div className="second-value">
          <p className="amount">Valor da Compra: </p>
          <p className="amount" id="value">R$ {props.amount},00</p>
        </div>
      </div>
    </div>
  );
}
