import { MainStyled } from "./MainStyled"
import CardsContainer from "./cardsContainer/CardsContainer"

export default function Main({ filterByName, setFilterByName, filterSort, setFilterSort, filterPriceMin, setFilterPriceMin, filterPriceMax, setFilterPriceMax, incrementQuantity, handleClick, toys, cart, setCart }) {
    return (
        <MainStyled>
            <CardsContainer
                filterByName={filterByName}
                setFilterByName={setFilterByName}
                filterSort={filterSort}
                setFilterSort={setFilterSort}
                filterPriceMin={filterPriceMin}
                setFilterPriceMin={setFilterPriceMin}
                filterPriceMax={filterPriceMax}
                setFilterPriceMax={setFilterPriceMax}
                cart={cart} setCart={setCart}
                incrementQuantity={incrementQuantity}
                handleClick={handleClick}
                toys={toys}
            />

        </MainStyled>
    )
} 