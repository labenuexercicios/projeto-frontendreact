import React from "react";
import { ContainerProd, ContainerShopping, ImagemProd, NameProd, PriceProd } from "./styled";

const ShoppingProds = ({ prodShopping, name, numberMin, cart, setCart }) => {

    const addProdInCart = (prod) => {
        const copyProductsCart = [...cart]

        const item = copyProductsCart.find(product => product.id === prod.id)

        if (!item) {
            // não tem produto
            copyProductsCart.push({
                id: prod.id,
                name: prod.name,
                quant: 1
            })
        } else {
            item.quant = item.quant + 1
        }

        setCart(copyProductsCart)
    }



    return (
        <ContainerShopping>
            {prodShopping.filter((item) => {
                return item.name.toLowerCase().includes(name.toLowerCase());
            })
                .filter((item) => {
                    return item.price >= numberMin
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
