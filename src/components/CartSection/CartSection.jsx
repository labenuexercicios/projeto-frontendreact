import React from "react";
import CartItem from "../CartItem/CartItem";
import "./style.css";

export default function CartSection(props){
    const subtotal = props.products
        .filter(part => part["Ordered"] > 0)
        .reduce((previous, current) => 
            previous + current["Cost"]*current["Ordered"], 0);

    return (
        <section id="cart-section" className={props.cartVisibility? "see" : ""}>
            <div id="first-cart-col">
                <h1 onClick={props.handleClick}><i className="fa-solid fa-arrow-left"></i></h1>
            </div>
            <div id="second-cart-col">
                <h1 id="shopping-cart-title">Shopping Cart</h1>
                <div id="shopping-cart-parameters">
                    <h3 className="shopping-cart-parameter">Img</h3>
                    <h3 className="shopping-cart-parameter">Description</h3>
                    <h3 className="shopping-cart-parameter">Nº</h3>
                    <h3 className="shopping-cart-parameter">Total</h3>
                    <h3 className="shopping-cart-parameter"></h3>
                </div>
                <div id="shopping-cart-products">
                    {props.products
                        .filter(part => part["Ordered"] > 0)
                        .map((part, index) =>{
                            return <CartItem 
                                        key={index}
                                        part={part}
                                        products={props.products}
                                        setProducts={props.setProducts}    
                                    />
                        })
                    }
                </div>
                <h1 id="subtotal"><span id="subtotal-span">Subtotal: </span>{subtotal > 0 ? `K$ ${subtotal}` : ""}</h1>
            </div>
        </section>
    )
}