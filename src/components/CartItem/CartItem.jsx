import React from "react";
import "./style.css";

export default function CartItem(props){
    const operateCart = (operation) => {
        const newProducts = [...props.products];
        newProducts.map(product => {
            if (product["Id"] === props.part["Id"]){
                switch(operation){
                    case "increase":
                        product["Ordered"] += 1;
                        break;
                    case "decrease":
                        product["Ordered"] -= 1;
                        break;
                    case "erase":
                        product["Ordered"] = 0;
                        break;
                    default:
                        console.log("Undefined operation");
                }
            }
        })
        props.setProducts([...newProducts]);
    }

    return (
        <div className="cart-item">
            <div className="cart-i-image-container">
                <img className="cart-i-image" src={props.part["Image"]} alt={props.part["Name"]}/>
            </div>
            <div className="cart-i-name-group">
                <h2 className="cart-i-name">{props.part["Name"]}</h2>
                <h3 className="cart-i-category">{`${props.part["Category"]}`}</h3>
            </div>
            <div className="cart-i-quantity-group">
                <button className="cart-i-button-dark" onClick={() => operateCart("increase")}>+</button>
                <span className="cart-i-ordered">{props.part["Ordered"]}</span>
                <button className="cart-i-button-dark" onClick={() => operateCart("decrease")}>-</button>
            </div>
            <h2>{`K$ ${props.part["Ordered"]*props.part["Cost"]}`}</h2>
            <button className="cart-i-button-clear" onClick={() => operateCart("erase")}>X</button>
        </div>
    )
}