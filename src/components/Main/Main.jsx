import React, { useContext } from "react";
import { ProductsContext } from '../Context/ProductsContext'

import filterItems from "../Filter/Filter";
import { currencyBrazil, sortArrayAD } from '../Libs/Lib'
// import { Card, ContainerCard, ContainerInfo, ImgAddCart, Info, Item, OldPrice, Price, Title, Xtime, Image, ContainerImage, Button } from "./styled";
import { Card, ContainerCard, ContainerInfo, Info, Item, OldPrice, Price, Title, Xtime, Image, ContainerImage, Button } from "./styled";
1

export default function Main() {
    const context = useContext(ProductsContext)
    const {
        cart,
        setCart,
        typeSort,
    } = context
    
    // let arrayRender = [...filterItems()]
    // arrayRender = sortArrayAD(arrayRender, typeSort)
    const arrayRender = sortArrayAD([...filterItems()], typeSort)
   
    return (
        <ContainerCard>
            <Card>
                {
                    arrayRender.map(prod => (
                        <Item key={prod.code} >
                            <ContainerImage>
                                <Image id={prod.code} src={prod.img} ></Image>
                            </ContainerImage>
                            <ContainerInfo>
                                <Info>
                                    <Title>{prod.name}</Title>
                                    <OldPrice>{currencyBrazil(+prod.price * 1.30,true)}</OldPrice>
                                    <Price>{currencyBrazil(prod.price, true)}</Price>
                                    <Xtime>10x de {currencyBrazil(+prod.price / 10,true)} s/juros </Xtime>
                                </Info>
                                <Button onClick={() => addItemCart({ prod, cart, setCart})}>COMPRAR</Button>
                            </ContainerInfo>
                        </Item>
                    ))
                }
            </Card>
        </ContainerCard>
    )
}

function addItemCart(props) {
   
    const { prod, cart, setCart} = props
    const codePro = prod.code
    const pricePro = +prod.price

    let newItem = [...cart]
    let result=[]

    if (newItem.length){
         result = newItem.filter(event => event.code === codePro)
    }

    if (!result.length) {
        newItem = [...cart, {
            code: codePro,
            amount: 1,
            price: pricePro
        }]
    } else {
        newItem = newItem.map(product => {
            if (product.code === codePro) {
                product.amount++
            }
            return product
        })
        
    }
    setCart(newItem)
}

