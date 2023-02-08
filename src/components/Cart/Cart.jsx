import "./style.css"
import { ContextGlobal } from "../../context/ContextGlobal";
import { useContext, useState } from "react";

export default function Cart() {
    const context = useContext(ContextGlobal)
    const cart = context.cart
    const setCart = context.setCart

    const removeItemCart = (item) => {
        const removeItem = context.cart.filter(
            (product) => product !== item
        );
        context.setCart(removeItem)
    };

    const rmvProduct = (product) => {
        if (product.amount <= 1) {
            removeItemCart(product)
        } else {
            const newProduct = cart.find((item) => item.id === product.id)
            if (newProduct === undefined) {
                setCart([{ ...product, amount: 1 }])
            } else {
                const newCart = cart.map((item) => {
                    if (item.id === product.id) {
                        return { ...newProduct, amount: newProduct.amount - 1 }
                    } else {
                        return item
                    }
                })
                setCart(newCart)
            }
        }
    };

    const addProduct = (product) => {
        const newProduct = cart.find((item) => item.id === product.id)

        if (newProduct === undefined) {
            setCart([{ ...product, amount: 1 }])

        } else {
            const newCart = cart.map((item) => {
                if (item.id === product.id) {
                    return (
                        { ...newProduct, amount: newProduct.amount + 1 }
                    )
                } else {
                    return item
                }
            })
            setCart(newCart)
        }
    };


    const ShowList = cart.map((item) => {
        return (
            <div className="itens-cart" key={item.id}>
                <img src={item.imageUrl} alt="" />
                <ul>
                    <li>{item.name}</li>
                    <li id="li-btn">
                        <button className="btn-cart" onClick={() => rmvProduct(item)}>-</button>
                        {item.amount}
                        <button className="btn-cart" onClick={() => addProduct(item)}>+</button></li>
                    <li>R$ {item.price * item.amount}</li>
                    <button onClick={() => removeItemCart(item)}><img id="icon-bin" src="https://cdn-icons-png.flaticon.com/512/54/54324.png" alt="" /></button>
                </ul>
            </div>
        )
    })


    return (
        <div className="container-cart">
            <input type="checkbox" id="check" />
            <label htmlFor="check" id="icone"><img src="https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png" alt="" /></label>
            <div className="barra">
                <div className="nav-cart">
                    <h2>Carrinho</h2>
                    {ShowList}

                </div>
            </div>
        </div>
    )
}

