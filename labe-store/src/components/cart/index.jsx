import React from "react";
import CartEmpty from "../cartEmpty";
import { ContainerPrincipal, ListContainer, ImagemCart, ItensList } from "./styled"

const Cart = ({ cart, removeProductToCart, addProdInCart, priceTot, somarPrecoTotal }) => {

    return (
        <div>
            {cart.length === 0 ?
                <div>
                    <CartEmpty />
                </div>
                :
                cart.map((item, index) => {
                    return (
                        <ContainerPrincipal key={index}>

                            <div>
                                <ListContainer>
                                    <ImagemCart src={item.imagem} alt="" />
                                    <ItensList>{item.quant}</ItensList>
                                    <ItensList>{item.name}</ItensList>
                                </ListContainer>
                            </div>

                            <div>
                                {/* <button onClick={() => {
                                    addProdInCart(item)
                                }} >+</button>
                                <button onClick={() => { removeProductToCart(item) }} >-</button> */}
                            </div>

                        </ContainerPrincipal>
                    )
                })

            }
            <div>
                <h2>valor total  {priceTot.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h2>
            </div>


        </div>
    )
}

export default Cart
