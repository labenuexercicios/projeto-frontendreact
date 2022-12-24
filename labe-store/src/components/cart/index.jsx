import React from "react";
import CartEmpty from "../cartEmpty";
import { ContainerCart, ContainerDiv, DivButtons, DivImg, DivInfoProd, Img, ProdCart } from "./styled";

const Cart = ({ cart, removeProductToCart, addProdInCart, priceTot }) => {





    return (
        <ContainerDiv>
            {cart.length === 0 ?
                <div>
                    <CartEmpty />
                    <div>

                    </div>
                </div>

                :
                cart.map((item, index) => {
                    return (
                        <ContainerCart key={index}>

                            <ProdCart>
                                <DivImg>
                                    <Img src={item.imagem} alt="imagem do produto" />
                                </DivImg>
                                <DivInfoProd>
                                    <div>
                                        <p>{item.quant}x</p>
                                        <p>{item.name}</p>
                                    </div>
                                    <div>
                                        <p>{item.priceUni.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                                    </div>
                                </DivInfoProd>
                                <DivButtons>
                                    <button onClick={() => {
                                        addProdInCart(item)
                                    }} >+</button>
                                    <button onClick={() => { removeProductToCart(item) }} >-</button>
                                </DivButtons>

                            </ProdCart>

                        </ContainerCart>
                    )
                })
            }
            <div>
                <h2>valor total  {priceTot.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h2>
            </div>

        </ContainerDiv>
    )
}

export default Cart
