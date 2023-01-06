import React from "react";
import Cart from "../../components/cart";
import Header from "../../components/Header";
import PainelCart from "../../components/painelCart";
import { BoxCart, BoxCartEmpty, BoxFooter, BoxHeader, Main, SyledBody } from "./styled";
import Footer from "../../components/footer";


const CartPage = ({ setShowCart, cart, setCart, goHome, removeProductToCart, addProdInCart, priceTot, somarPrecoTotal }) => {
    return (
        <SyledBody>
            <BoxHeader>
                <Header
                    goHome={goHome} />
            </BoxHeader>
            <Main>
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
                </BoxCart>
                {cart.length > 0 ?
                    <BoxCartEmpty>
                        <PainelCart
                            priceTot={priceTot}
                            cart={cart}
                        />
                    </BoxCartEmpty>
                    :
                    <div>

                    </div>
                }
                <div>

                </div>
            </Main>
            <BoxFooter>
                <Footer />
            </BoxFooter>
        </SyledBody>
    )
}

export default CartPage;
