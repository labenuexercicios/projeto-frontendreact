import React from "react";
import { CartEmpty, ContainerDiv } from "./styled";

const Cart = ({ setShowCart, cart }) => {


    return (
        <ContainerDiv>
            {cart.length !== 0 ?
                cart.map((item) => {
                    return (
                        <div key={item.id}>
                            <p>{item.quant}</p>
                            <p>{item.name}</p>
                            <button>remover</button>
                        </div>
                    )
                })
                :
                <CartEmpty>
                    <h4>carrinho vazio</h4>
                </CartEmpty>
            }
            <button onClick={() => {
                setShowCart(false);
            }}>fechar</button>
        </ContainerDiv>
    )
}

export default Cart
