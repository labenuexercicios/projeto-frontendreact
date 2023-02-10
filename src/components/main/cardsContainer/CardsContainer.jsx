import Card from "./card/Card"
import { CardsContainerStyled, CardEnvelopedStyled } from "./CardsContainerStyled"

export default function CardsContainer({ filterByName, setFilterByName, filterSort, setFilterSort, filterPriceMin, setFilterPriceMin, filterPriceMax, setFilterPriceMax, incrementQuantity, handleClick, toys, cart, setCart }) {
    return (
        <CardsContainerStyled>
            {toys
                .filter((toy) => {
                    return toy.Name.toLowerCase().includes(filterByName) ? true : false
                })
                .filter((toy) => {
                    return toy.Price > filterPriceMin;
                })
                .filter((toy) => {
                    return toy.Price < filterPriceMax;
                })

                .sort((currentElement, nextElement) => {

                    if (filterSort === "crescent") {
                        if (currentElement.Name < nextElement.Name) {
                            return -1
                        } else if (currentElement > nextElement) {
                            return 1;
                        } else {
                            return 0;
                        }
                    }

                    if (filterSort === "decrescent") {
                        if (currentElement.Name > nextElement.Name) {
                            return -1
                        } else if (currentElement < nextElement) {
                            return 1;
                        } else {
                            return 0;
                        }
                    }
                })

                .map((toy, index) => {
                    return (
                        <CardEnvelopedStyled key={index}>
                            <Card
                                cart={cart}
                                setCart={setCart}
                                incrementQuantity={incrementQuantity}
                                handleClick={handleClick}
                                toy={toy} />
                        </CardEnvelopedStyled>
                    )
                })
            }
        </CardsContainerStyled>
    )
} 