import React, { useState, useEffect } from "react"
import { Header, Logo, UserSection, Navbar, ProductsSection, Footer } from "../components/styled-components"
import { ProductCardCart } from "../components/cartpage-only/ProductCardCart"

export const CartPage = (props) => {

    const cartProducts = props.cartProducts
        const renderizeCart = cartProducts.map((cartProduct) => {
            return <ProductCardCart />
        })

    return (
        <>
            <Header />
            <UserSection />
            <Navbar />
            <ProductsSection>
                {cartProducts.length > 1? renderizeCart : <p>Ainda não há itens no seu carrinho.</p>}
            </ProductsSection>
            <Footer />
        </>
    )
}