import { CartMenu, H1Cart, H1Total } from "./styled"
import { Itens } from "./Itens"


export function Cart({AllProducts,setAmount, cart, amount, onChangeAmount, onChangeCart, setCart}) {
   
    amount = cart.reduce ((total, i)=>{
        return total + (i.value * i.quantity)

    }, 0 )


    

    return (

       
        <div>
             <CartMenu>
                <H1Cart><b>Carrinho</b></H1Cart>
                        
         
                    {cart    
                    .map((Search) => {
                    return <Itens
                    amount={amount}
                    onChangeAmount = {onChangeAmount}
                    setAmount = {setAmount}
                    cart = {cart}
                    Products = {Search}
                    setCart = {setCart}
                    onChangeCart = {onChangeCart}
                    AllProducts = {AllProducts}
                    
                    />})
                }
                

                


             </CartMenu>
                  <H1Total><b>Total R$ : {amount}</b></H1Total>  
        </div>
    )
}