import Header from "../../Header/Header"
import ProductCard from "../ProductCard/ProductCard"
import { PaginaHome } from "./HomeStyle"
import { SectionCard } from "./HomeStyle"
const Home = (props) => {

    return (
        <PaginaHome>

            <Header />

            {<SectionCard>
                {props.product
                    /* .filter((pro) => {
                        return props.pro.name.includes(searchFilter)

                    }) */
                    .map((prod, index) => {
                        return (<ProductCard
                            key={index}
                            name={prod.name}
                            image={prod.imageUrl}
                            value={prod.value}

                        />)

                    })}
            </SectionCard>}

        </PaginaHome>

    )
}
export default Home
/* .filter((prod)=>{return prod.name.includes(props.searchFilter)}) */