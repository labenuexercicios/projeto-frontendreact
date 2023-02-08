import { Image, HomeContainer, CardContainer } from "./style"
import { Card } from "../../components/Card/Card"
import Products from "../../components/Products/products.json"
import { ContextGlobal } from "../../context/ContextGlobal"
import { useContext } from "react"

export const HomePage = () => {
    const context = useContext(ContextGlobal)
    const search = (context.search);
    const orderPrice = (context.orderPrice)
    const category = (context.category)
    const valueMin = (context.valueMin)
    const valueMax = (context.valueMax)

    return (
        <HomeContainer>
            <Image src="https://www.mub.eps.manchester.ac.uk/science-engineering/wp-content/uploads/sites/59/2021/07/Universe-cropped-1400x400.jpg" />
            <CardContainer>
                {Products
                    .filter((product) => {
                        return valueMin ? product.price >= valueMin : product;
                    })
                    .filter((product) => {
                        return valueMax ? product.price <= valueMax : product;
                    })
                    .filter((product) => {
                        return product.name.toLowerCase().includes(search.toLowerCase())
                    })
                    .filter((product) => {
                        return category ? product.type.includes(category) : product;
                    })
                    .sort((currentPrice, nextPrice) => {
                        switch (orderPrice) {
                            case "growing":
                                return currentPrice.price - nextPrice.price;
                            case "descending":
                                return nextPrice.price - currentPrice.price;
                            default:
                                break;
                        }
                    })
                    .map(product => {
                        return (
                            <Card product={product} key={product.id} />
                        )
                    })}
            </CardContainer>
        </HomeContainer>
    )
}