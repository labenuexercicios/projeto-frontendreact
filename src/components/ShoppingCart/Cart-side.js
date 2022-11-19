import { useState } from "react"
import { CartCardContainer, CartContainer } from "./Cart-side.styled";




function CartSide(props) {
    const { 
        currCart,
        setScreen,
        addQuantityToProductOnCart,
        reduceQuantityToProductOnCart,
        handleClickProduct
    } = props


    let subTotal =( currCart.reduce((acc, product) => (product.quantity * product.priceDiscont + acc), 0)).toFixed(2)
    




    return (


        <CartContainer size={currCart.length}>
           
              <div>
                <p>SubTotal</p>
                <p>R${subTotal}</p>
                <button onClick={()=>setScreen("cart")}>ir para carrinho</button>
            </div>

            {currCart
                .map((product) => {
                   
                
                    return (
                        <CartCardContainer key={product.id}>

                            <img onClick={()=>handleClickProduct(product)} src={product.image[0]} alt={product.altImage} />

                            <p>R${product.priceDiscont.toFixed(2)}</p>
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