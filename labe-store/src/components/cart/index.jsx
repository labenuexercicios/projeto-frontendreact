import React from "react";
import CartEmpty from "../cartEmpty";
import { ContainerPrincipal, ImagemCart, BoxPrice, BoxName, BoxButtonsAddAndRemove, TxtName, Buttons, ContainerCartAndPrice, BoxCartEmpty } from "./styled"

const Cart = ({ cart, removeProductToCart, addProdInCart, priceTot, somarPrecoTotal }) => {

    return (
        <div>
            {cart.length === 0 ?
                <BoxCartEmpty>
                    <CartEmpty />
                </BoxCartEmpty>
                :
                cart.map((item, index) => {
                    return (
                        <ContainerPrincipal key={index}>
                            <BoxName>
                                <ImagemCart src={item.imagem} alt="" />
                                <TxtName>{item.name}</TxtName>
                            </BoxName>
                            <BoxButtonsAddAndRemove>
                                <Buttons onClick={() => { addProdInCart(item) }} >+</Buttons>
                                <p><strong>{item.quant}</strong></p>
                                <Buttons onClick={() => { removeProductToCart(item) }} >-</Buttons>
                            </BoxButtonsAddAndRemove>
                            <BoxPrice>
                                <TxtName>{item.priceSingle.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</TxtName>
                            </BoxPrice>
                        </ContainerPrincipal>

                    )
                })
            }
        </div>
    )
}

export default Cart
