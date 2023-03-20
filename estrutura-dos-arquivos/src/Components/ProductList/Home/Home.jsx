import Header from "../../Header/Header"
import ProductCard from "../ProductCard/ProductCard"
import { PaginaHome } from "./HomeStyle"
import { SectionCard } from "./HomeStyle"
import productList from "../../assents/productsList"

const Home = (props) => {
    
   
    
    return (
        <PaginaHome>

            <Header
            />

            <SectionCard>
                {props.product.filter((nomeProduct) => {
                    return props.searchFilter ? nomeProduct.name.toLowerCase().includes(props.searchFilter.toLowerCase()) :
                        nomeProduct
                })
                .sort((a, b) => {
                    if (props.ordination === "crescente") {
                        return a.value - b.value
                    }
                    if (props.ordination === "decresente") {
                        return b.value - a.value
                    }
                }).map((prod, index) => {
                        return (<ProductCard
                            key={index}
                            name={prod.name}
                            image={prod.imageUrl}
                            value={prod.value}

                        />)

                })}
            </SectionCard>

        </PaginaHome>

    )
}
export default Home
