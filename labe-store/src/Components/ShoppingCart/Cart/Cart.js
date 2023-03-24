import Items from "../Items/Items";
import { DivCart, ValueCart, H3, ValueTotal, ButtonEnding, Title, Div } from "./cartStyle";


export default function Cart({addCart, deleteProductCart,cartTotal, endCart}){  
    
    
    return(
        <DivCart>

            <ValueCart>
                <Title>Carrinho</Title>
                <ValueTotal>
                    <p>Valor Total</p>
                    <u><h3>R$ {cartTotal.toFixed(2)}</h3></u>
                    <ButtonEnding onClick={()=> endCart()}>FINALIZAR COMPRA</ButtonEnding>
                </ValueTotal>
                
            </ValueCart>

            <Div>

                {addCart.map((product)=>{
                    return(
                        <Items
                        key={product.id}
                        product={product}
                        deleteProductCart={deleteProductCart}/>
                    )
                    
                })}
                <>
                {addCart.length === 0 && <H3>O Carrinho está vazio</H3>}
                </>
            </Div>
            
        </DivCart>
    )
}