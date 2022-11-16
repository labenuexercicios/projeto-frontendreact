import React, { useState } from "react";
import { MainCard } from "./styles";
import { ProductsCard } from "../ProductsCard/ProductsCard";
import {Filters} from "../Filters/Filters"

import products from "../../assets/products.json"


export function PrincipalCard() {
    const [productsList] = useState(products)
    const [minPrice, setMinPrice] = useState(-Infinity)
    const [maxPrice, setMaxPrice] = useState(Infinity)
    const [order, setOrder] = useState("asc")
    const [quantifyProducts, setQuantifyProducts] = useState(1)

    // const addQuantity = () => {
    //     quantifyProducts
    // }

    return (
        <MainCard>
            <img className="backgroung-image" />
            <Filters
                minPrice={minPrice}
                setMinPrice={setMinPrice}
                maxPrice={maxPrice}
                setMaxPrice={setMaxPrice}
                order={order}
                setOrder={setOrder}
            />
            <p className="quantify" >Quantidade de produtos: {quantifyProducts}</p>
            <ProductsCard productsList={productsList}>

            </ProductsCard>

        </MainCard>
    )
}