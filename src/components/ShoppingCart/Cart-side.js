import { useState } from "react"
import { CartCardContainer, CartContainer } from "./Cart-side.styled";




function CartSide(props) {
    const { 
        currCart,
        addQuantityToProductOnCart,
        reduceQuantityToProductOnCart
    } = props


    let subTotal =( currCart.reduce((acc, product) => (product.quantity * product.price + acc), 0)).toFixed(2)
    




    return (


        <CartContainer size={currCart.length}>
           
              <div>
                <p>SubTotal</p>
                <p>R${subTotal}</p>
                <button>ir para carrinho</button>
            </div>

            {currCart
                .map((product) => {
                
                    return (
                        <CartCardContainer key={product.id}>

                            <img src={product.image} alt="Imagem do product" />

                            <p>R${product.price}</p>
                            <div>
                                <button onClick={()=>reduceQuantityToProductOnCart(product)}>-</button>
                                <p>{product.quantity}</p>
                                <button onClick={()=>addQuantityToProductOnCart(product)}>+</button>
                            </div>
                            <button onClick={()=>reduceQuantityToProductOnCart(product,0)}>Erase</button>

                        </CartCardContainer>)

                })

            }
          



        </CartContainer>
    )

}
export default CartSide