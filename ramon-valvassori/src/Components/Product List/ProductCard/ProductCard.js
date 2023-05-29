import { ProductCard } from "./productCardStyle";
import ProductList from "../../assents/productList"
import { useState } from 'react'

const ProductCard = (props) => {
    console.log("props ProductList", props);
    
return (
    <div className="ProductCard">
        <ProductList />
    </div>
)
}

export default ProductCard