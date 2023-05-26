import { useEffect } from "react";
import { Items } from "../Items";
import { HiShoppingCart } from "react-icons/hi";

export function Cart(props) {

  const removeItem = (elemento) =>{ 
    const haveInCart = props.cart.find((item)=> item.id === elemento.id)
    
    if(haveInCart.quantity === 1){
      const updateCart = props.cart.filter((item)=> item.id !== elemento.id)
      props.setCart(updateCart)

    }else{
      const updateInCart = props.cart.map((item) => {
        return {...item, quantity: item.quantity - 1}
      })
      props.setCart(updateInCart)
    }
  }

  useEffect(()=>{ // Salvar os itens
    const listCart = JSON.stringify(props.cart)
    if(props.cart.length > 0){
      localStorage.setItem('cart', listCart)
    }
  },[props.cart])

  useEffect(()=>{ // Salvar os valor
    let listAmount = 0
    if(props.cart.length){
      props.cart.map((item)=>{
        return (listAmount += (item.quantity * item.value))
      })
      props.setAmount(listAmount)
    }else{
      props.setAmount(0)
    }
  },[props.cart])

  useEffect(()=>{
    const listCart = localStorage.getItem('cart')
    const listCartArray = JSON.parse(listCart)
    if(listCart){
      props.setCart(listCartArray) 
    }else{
      props.setCart([])
    }
  },[])

  useEffect(()=>{
    const listAmount = localStorage.getItem('amount')
    const listAmountArray = JSON.parse(listAmount)
    if(listAmount){
      props.setAmount(listAmountArray)
    }else{
      props.setAmount(0)
    }
  },[])
  

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
        <p id="amount">Valor da Compra: R${props.amount} </p>
      </div>
    </div>
  );
}
