import React, { useState, useEffect } from "react"
import { Header, Logo, UserSection, Navbar, ProductsSection, Footer } from "../components/styled-components"
import { ProductsFilter } from "../components/homepage-only/ProductsFilter"
import { ProductCardBuy } from "../components/homepage-only/ProductsCardBuy"
import AstroRocksLogo from "../image/AstroRocksLogo.png"

export const HomePage = (props) => {
    const products = props.products

    const renderizeProducts = products.map((product) => {

        return <ProductCardBuy
            key={product.id}
            imageUrl= {product.imageUrl}
            name={product.name}
            description={product.description}
            price={product.price}
            amountToBuy={product.amountToBuy}
            setAmountToBuy={props.setAmountToBuy}
            addToCart={product.addToCart}
        />
    })


    return (
        <>
            <Header>
                <Logo src={AstroRocksLogo} alt="logo" /><UserSection />
            </Header>
            <Navbar />
            <select id="filter" name="filter">
                <option value="nome">Nome</option>
                <option value="Preço">Preço</option>
            </select>
            <ProductsSection>
                {renderizeProducts}
            </ProductsSection>
            <Footer />
        </>
    )
}
