import { Items } from "../Items/Items"
import { CartStyle, Background, Div1,Div2,Div3 } from "./CartStyle"

export const Cart =({cart, setCart,amount, setAmount,removeProduct,changeScreen})=>{
    const showHomepage = () => { changeScreen("Homepage")}
    const finish =()=>{changeScreen("Finish");
    setCart([]); setAmount(0);
    localStorage.removeItem("cart")}
    return(
        <Background>
        <CartStyle>
            <Div1>
                <button onClick={showHomepage}>+</button>
                <h2>Cart</h2>
            </Div1>
            <Div2>
                {cart.map((product,index)=>{return (<Items product={product} key={index} removeProduct={removeProduct}/>)})}
            </Div2>
            <Div3>
                <p>Valor Total: {amount.toFixed(2).replace(".",",")}</p>
                <div>
                <button onClick={showHomepage}>continue comprando</button>
                <button onClick={finish}>Finalizar compra</button>
                </div>
            </Div3>
        </CartStyle>
        </Background>
        
        
        
    )
}