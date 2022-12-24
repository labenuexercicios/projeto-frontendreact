import React from "react";
import Filters from "../../components/filters";
import Footer from "../../components/footer";
import Header from "../../components/Header";
import ShoppingProds from "../../components/shoppingProds";
import { Main } from "./styled";

const Home = ({ prodShopping, setProdShopping, numberMin, setNumberMin, setShowCart, cart, setCart, setPages, goCart, addProdInCart, filterName, name }) => {

    return (
        <div>
            <Header
                setShowCart={setShowCart}
                setPages={setPages}
                goCart={goCart}
                filterName={filterName}

            />
            <Main>
                {/* <Filters
                    numberMin={numberMin} setNumberMin={setNumberMin}
                    prodShopping={prodShopping} setProdShopping={setProdShopping}
                /> */}
                <ShoppingProds
                    prodShopping={prodShopping} name={name}
                    numberMin={numberMin} setNumberMin={setNumberMin}
                    addProdInCart={addProdInCart}

                    cart={cart}
                    setCart={setCart}
                />

            </Main>
            <Footer />
        </div>
    )
}

export default Home
