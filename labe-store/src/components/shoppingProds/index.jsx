import React from "react";
import { BtnAddCart, ContainerProd, ContainerShopping, ImagemProd, NameProd, PriceProd, TextButon } from "./styled";

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
                }).map((item) => {
                    return (
                        <ContainerProd key={item.id}>
                            <NameProd>{item.name}</NameProd>
                            <ImagemProd src={item.thumbnail} alt="" />
                            <PriceProd>R$ {item.price}</PriceProd>
                            <BtnAddCart onClick={() => { addProdInCart(item) }}><TextButon><strong>adicionar ao carrinho</strong></TextButon></BtnAddCart>
                        </ContainerProd>
                    )
                })}
        </ContainerShopping>
    )
}

export default ShoppingProds;
