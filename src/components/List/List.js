import React from "react";
import Card from "../Card/Card";
import productData from '../../productData/productData.json';
import { useContext } from 'react';
import { AppContext } from '../../AppContext';
import "./List.css"

const List = (props) => {
    const { typeP } = useContext(AppContext);

    const filteredProductDataBySort = productData.filter(item => item.type === typeP);

    const filteredProductData = filteredProductDataBySort.sort((a, b) => {
        if (props.sort === "desc") {
            return b.price - a.price;
        } else {
            return a.price - b.price;
        }
    })

    var filteredProducts = filteredProductData;
    if (props.isNewOnly) {
        filteredProducts = filteredProductData.filter(item => item.isNew === true);
    } else if (props.promotion) {
        filteredProducts = filteredProductData.filter(item => item.oldPrice !== false);
    } 

    const finalProducts = filteredProducts.filter(item => item.price <= props.priceMax)
    console.log(finalProducts)
    console.log(filteredProductData)
    console.log(filteredProducts) 

    return (
        <div className="list">{finalProducts.map(item => (
            <Card item={item} key={item.id} />
        ))}</div>
    );
}

export default List