import { useState } from "react";
import { MainCard } from "./styles";
import { ProductsCard } from "../ProductsCard/ProductsCard";
import { Filters } from "../Filters/Filters"

import products from "../../assets/products.json"


export function PrincipalCard(props) {
    const [productsList] = useState(products)
    const [search, setSearch] = useState("")
    const [minPrice, setMinPrice] = useState(-Infinity)
    const [maxPrice, setMaxPrice] = useState(Infinity)
    const [order, setOrder] = useState("asc")
    const [quantifyProducts, setQuantifyProducts] = useState(0)

    // const addQuantity = () => {
    //     quantifyProducts
    // }


    return (

        <MainCard>
                 

            <Filters
                search={search}
                setSearch={setSearch}
                minPrice={minPrice}
                setMinPrice={setMinPrice}
                maxPrice={maxPrice}
                setMaxPrice={setMaxPrice}
                order={order}
                setOrder={setOrder}
            />

            <p className="quantify" >Quantidade de produtos: {quantifyProducts}</p>

            <section>
                {products
                    .filter((product) => {
                        return product.name.toLowerCase().includes(search.toLowerCase())
                    })
                    .filter((product) => {
                        return product.price >= minPrice || minPrice === ""
                    })
                    .filter((product) => {
                        return product.price <= maxPrice || maxPrice === ""
                    })
                    .sort((a, b) => {
                        if (order === "asc") {
                            if (a.name > b.name) {
                                return 0
                            } else {
                                return -1
                            }
                        } else if (order === "desc") {
                            if (a.name < b.name) {
                                return 0
                            } else {
                                return -1
                            }
                        }
                    })
                    .sort((a, b) => {
                        if (order === "priceMin") {
                            if (a.price > b.price) {
                                return 0
                            } else {
                                return -1
                            }
                        } else if (order === "priceMax") {
                            if (a.price < b.price) {
                                return 0
                            } else {
                                return -1
                            }
                        }
                    })
                    .map((product) => {
                        return <ProductsCard key={product.id} product={product} />
                    })
                }
            </section>
        </MainCard>
    )
}