import React from "react";
import { ContainerProd, ContainerShopping, ImagemProd, NameProd, PriceProd } from "./styled";

const ShoppingProds = ({ prodShopping, name, numberMin, addProdInCart, numberMax, sort }) => {
    return (
        <ContainerShopping>
            {prodShopping
                .filter((item) => {
                    return item.price >= numberMin || numberMin === ""
                })
                .filter((item) => {
                    return item.price <= numberMax || numberMax === ""
                })
                .filter((item) => {
                    return item.name.toLowerCase().includes(name.toLowerCase())
                })
                .sort((currentItem, nextItem) => {

                })
                .map((item) => {
                    return (
                        <ContainerProd key={item.id}>
                            <NameProd>{item.name}</NameProd>
                            <ImagemProd src={item.thumbnail} alt="" />
                            <PriceProd>R$ {item.price}</PriceProd>
                            <button onClick={() => { addProdInCart(item) }}>adicionar ao carrinho</button>
                        </ContainerProd>
                    )
                })}
        </ContainerShopping>
    )
}

export default ShoppingProds;
