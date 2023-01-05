import React from "react";
import Cart from "../../components/cart";
import Header from "../../components/Header";
import PainelCart from "../../components/painelCart";
import { BoxCart, Main } from "./styled";

const CartPage = ({ setShowCart, cart, setCart, goHome, removeProductToCart, addProdInCart, priceTot, somarPrecoTotal }) => {
    return (
        <div>
            <Header
                goHome={goHome} />
            <Main>
                <div>
                    <BoxCart>
                        <Cart
                            setShowCart={setShowCart}
                            cart={cart}
                            setCart={setCart}
                            removeProductToCart={removeProductToCart}
                            addProdInCart={addProdInCart}
                            priceTot={priceTot}
                            somarPrecoTotal={somarPrecoTotal}
                        />
                        {cart.length > 0 ?
                            <div>
                                <PainelCart
                                    priceTot={priceTot}
                                    cart={cart}

                                />
                            </div>
                            :
                            <div>

                            </div>
                        }
                    </BoxCart>
                    <div>

                    </div>
                </div>
            </Main>
        </div>
    )
}

export default CartPage;
