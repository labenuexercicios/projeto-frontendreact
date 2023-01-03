import React from "react";
import Cart from "../../components/cart";
import Filters from "../../components/filters";
import Footer from "../../components/footer";
import Header from "../../components/Header";
import ShoppingProds from "../../components/shoppingProds";
import { Main } from "./styled";

const Home = ({ prodShopping, setProdShopping, numberMin, setNumberMin, setShowCart, cart, setCart, setPages, goCart, addProdInCart, filterName, name, setNumberMax, numberMax, sort, setSort, removeProductToCart, priceTot }) => {

    return (
        <div>
            <Header
                setShowCart={setShowCart}
                setPages={setPages}
                goCart={goCart}
                filterName={filterName}

            />
            <Main>
                <Filters
                    cart={cart}
                    numberMin={numberMin}
                    setNumberMin={setNumberMin}
                    setCart={setCart}
                    numberMax={numberMax}
                    setNumberMax={setNumberMax}
                    prodShopping={prodShopping}
                    setProdShopping={setProdShopping}
                    sort={sort}
                    setSort={setSort}


                />

                <ShoppingProds
                    prodShopping={prodShopping} name={name}
                    numberMin={numberMin} setNumberMin={setNumberMin}
                    addProdInCart={addProdInCart}

                    numberMax={numberMax}
                    setNumberMax={setNumberMax}

                    cart={cart}
                    setCart={setCart}
                    setProdShopping={setProdShopping}

                    sort={sort}


                />
                {/* <Cart
                    setShowCart={setShowCart}
                    cart={cart}
                    setCart={setCart}
                    removeProductToCart={removeProductToCart}
                    addProdInCart={addProdInCart}
                    priceTot={priceTot} /> */}
            </Main>
            <Footer />
        </div>
    )
}

export default Home
