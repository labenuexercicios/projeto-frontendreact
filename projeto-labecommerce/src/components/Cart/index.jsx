import { useEffect } from "react";
import { Items } from "../Items";
import { HiShoppingCart } from "react-icons/hi";

export function Cart(props) {
  const removeItem = (elemento) =>{ 
    const updateCart = props.cart.filter((item)=> item.id !== elemento.id)
    props.setCart(updateCart)
  }

  const saveItemInLocalStorage = ()=>{
    const listCart = JSON.stringify(props.cart)
    console.log(listCart)
    if(props.cart.length > 0){
      localStorage.setItem('cart', listCart)
    }
  }

  useEffect(()=>{
    saveItemInLocalStorage()
  },[])
  console.log(saveItemInLocalStorage())
  
  const recoverItemInLocalStorage = ()=>{
    const listCart = localStorage.getItem('cart')
    const listCartArray = JSON.parse(listCart)
    if(listCart){
      props.setCart(listCartArray) 
    }
  }

  useEffect(()=>{
    recoverItemInLocalStorage()
  }, [])

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
