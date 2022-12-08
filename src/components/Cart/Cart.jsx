import { CartSection } from "./style"
import { BsFillCartFill } from 'react-icons/bs'
import { CartProduct } from "../CartProduct/CartProduct"
import { MessageConfirm } from "../messageConfirm/MessageConfirm"
import { useEffect, useState } from "react"

export const Cart = (props) => {

    const [visible, setVisible] = useState(false)
    const [contentMessage, setContentMessage] = useState('Compre alguma coisa :)')
    const [type, setType] = useState(false)


    const totalPrice = props.saleCart.reduce((acumulator, current)=>{
        const sumPrice = acumulator + current.price
        return sumPrice
    }, 0)

    const Message = () => {
        setVisible(true)
        setTimeout(()=>{
            setVisible(false)
        }, 3000)
        if(totalPrice > 0){
            setContentMessage('Pedido Feito!')
            setType(true)
        }else{
            setContentMessage('Compre alguma coisa :)')
            setType(false)
        }
    }
    return(
        <CartSection>
            <header>
                <BsFillCartFill style={{margin:'10px'}}/>
                <h6>CARRINHO</h6>
            </header>
            <article>
                {props.saleCart.map((cartItem, index)=>{
                    return <CartProduct key={index} nave={cartItem} 
                    clickedItemIndex = {index}
                    removeToCart={props.removeToCart}/>    
                })}
            </article>
            <article>Total: {"R$" + totalPrice.toFixed(2)}</article>
            <button onClick={Message}>COMPRAR</button>
            <MessageConfirm msg={contentMessage} visible={visible} setVisible={setVisible} type={type}/>
        </CartSection>
    )
}
