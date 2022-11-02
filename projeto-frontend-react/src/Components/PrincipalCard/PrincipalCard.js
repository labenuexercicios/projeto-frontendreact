import React, { useState } from "react";
import { MainCard } from "./styles";
import { ProductsCard } from "../ProductsCard/ProductsCard";
import {Filters} from "../Filters/Filters"

export function PrincipalCard() {
    const [minPrice, setMinPrice] = useState(-Infinity)
    const [maxPrice, setMaxPrice] = useState(Infinity)
    const [order, setOrder] = useState("asc")

    return (
        <MainCard>
            <img></img>
            <Filters
                minPrice={minPrice}
                setMinPrice={setMinPrice}
                maxPrice={maxPrice}
                setMaxPrice={setMaxPrice}
                order={order}
                setOrder={setOrder}
            />
            <ProductsCard />

        </MainCard>
    )
}