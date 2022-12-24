import React from "react";
import Cart from "../../components/cart";
import Header from "../../components/Header";
import { Main } from "./styled";

const CartPage = ({ setShowCart, cart, setCart, goHome, removeProductToCart, addProdInCart, priceTot }) => {
    return (
        <div>
            <Header
                goHome={goHome} />
            <Main>
                <Cart
                    setShowCart={setShowCart}
                    cart={cart}
                    setCart={setCart}
                    removeProductToCart={removeProductToCart}
                    addProdInCart={addProdInCart}
                    priceTot={priceTot}
                />
            </Main>
        </div>
    )
}

export default CartPage;
