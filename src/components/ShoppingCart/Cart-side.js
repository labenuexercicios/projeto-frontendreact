import { useState } from "react"
import { CartCardContainer, CartContainer } from "./Cart-side.styled";




function KartSide(props) {
    const { currCart } = props


    const subTotal = currCart.reduce((acc, product) => (product.quantity * product.preco + acc), 0)




    return (


        <CartContainer size={currCart.length}>
            {console.log(currCart.length)}
              <div>
                <p>SubTotal</p>
                <p>R${subTotal}</p>
                <button>ir para carrinho</button>
            </div>

            {currCart
                .map((product) => {
                    console.log(product);

                    return (
                        <CartCardContainer key={product.id}>

                            <img src={product.imagem} alt="Imagem do product" />

                            <p>R${product.preco}</p>
                            <div>
                                <button>-</button>
                                <p>{product.quantity}</p>
                                <button>+</button>
                            </div>
                            <button>Erase</button>

                        </CartCardContainer>)

                })

            }
          



        </CartContainer>
    )

}
export default KartSide