import React from "react";
import Cart from "../../components/cart";
import Header from "../../components/Header";
import { Main } from "./styled";

const CartPage = ({ setShowCart, cart, setCart, goHome, removeProductToCart, addProdInCart, priceTot, somarPrecoTotal }) => {
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
                    somarPrecoTotal={somarPrecoTotal}
                />
            </Main>
        </div>
    )
}

export default CartPage;
