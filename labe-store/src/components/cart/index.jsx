import React from "react";
import CartEmpty from "../cartEmpty";
import { ContainerPrincipal, ImagemCart, BoxPrice, BoxName, BoxButtonsAddAndRemove, TxtName, Buttons, ContainerCartAndPrice } from "./styled"

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
                        <ContainerCartAndPrice>
                            <div>
                                <ContainerPrincipal key={index}>
                                    <BoxName>
                                        <ImagemCart src={item.imagem} alt="" />
                                        <TxtName>{item.name}</TxtName>
                                    </BoxName>
                                    <BoxButtonsAddAndRemove>
                                        <Buttons onClick={() => { addProdInCart(item) }} >+</Buttons>
                                        <p>{item.quant}</p>
                                        <Buttons onClick={() => { removeProductToCart(item) }} >-</Buttons>
                                    </BoxButtonsAddAndRemove>
                                    <BoxPrice>
                                        <TxtName>{item.priceSingle.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</TxtName>
                                    </BoxPrice>
                                </ContainerPrincipal>
                            </div>

                        </ContainerCartAndPrice>
                    )
                })

            }
            {/* <div>
                <h2>valor total  {priceTot.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h2>
            </div> */}


        </div>
    )
}

export default Cart
