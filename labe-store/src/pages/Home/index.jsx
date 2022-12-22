import { React, useState } from "react";
import Cart from "../../components/cart";
import Filters from "../../components/filters";
import Header from "../../components/Header";
import ShoppingProds from "../../components/shoppingProds";
import { Main } from "./styled";

const Home = ({ prodShopping, setProdShopping, numberMin, setNumberMin, setShowCart, showCart, cart, setCart }) => {
    const [name, setName] = useState("");

    return (
        <div>
            <Header
                setName={setName}
                setShowCart={setShowCart}
            />
            <Cart
                setShowCart={setShowCart}

                cart={cart}
                setCart={setCart}
            />
            <Main>
                <Filters
                    numberMin={numberMin} setNumberMin={setNumberMin}
                    prodShopping={prodShopping} setProdShopping={setProdShopping}
                />
                <ShoppingProds
                    prodShopping={prodShopping} name={name}
                    numberMin={numberMin} setNumberMin={setNumberMin}

                    cart={cart}
                    setCart={setCart}
                />

            </Main>
        </div>
    )
}

export default Home
