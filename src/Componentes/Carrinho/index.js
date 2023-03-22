import { CartMenu, H1Cart, H1Total, BuyButton } from "./styled"
import { Itens } from "./Itens"


export function Cart({AllProducts, cart, amount, onChangeCart, setCart}) {
   
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
                    name="item"
                    htmlFor="item"
                    cart = {cart}
                    Products = {Search}
                    setCart = {setCart}
                    onChangeCart = {onChangeCart}
                    AllProducts = {AllProducts}
                    
                    />})
                }
                

                


             </CartMenu>
                  <H1Total><b>Total R$ : {amount.toFixed(2).replace(".",",")}</b></H1Total>  

                  <H1Total> <BuyButton> <b>COMPRAR</b> </BuyButton></H1Total> 
        </div>
    )
}