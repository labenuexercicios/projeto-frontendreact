import React from "react";
import { BtnAddCart, ContainerProd, ContainerShopping, ImagemProd, NameProd, PriceProd, TextButon } from "./styled";

const ShoppingProds = ({ prodShopping, name, numberMin, addProdInCart, numberMax, sortProd, saveItemLocasStorage }) => {



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
                }).sort(function (a, b) {
                    if (sortProd === "price") {
                        if (a.price > b.price) {
                            return 1;
                        }
                        if (a.price < b.price) {
                            return -1;
                        }
                    }
                    return 0;
                })
                .sort(function (a, b) {
                    if (sortProd === "title") {
                        if (a.name > b.name) {
                            return 1;
                        }
                        if (a.name < b.name) {
                            return -1;
                        }
                    }
                    return 0;
                })
                .map((item) => {
                    return (
                        <ContainerProd key={item.id}>
                            <NameProd>{item.name}</NameProd>
                            <ImagemProd src={item.thumbnail} alt="" />
                            <PriceProd>{item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</PriceProd>
                            <BtnAddCart onClick={() => {
                                addProdInCart(item)
                            }}><TextButon><strong>adicionar ao carrinho</strong></TextButon></BtnAddCart>
                        </ContainerProd>
                    )
                })}
        </ContainerShopping>
    )
}

export default ShoppingProds;
