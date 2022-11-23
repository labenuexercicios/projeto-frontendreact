import React from "react";
import Card from "../Card/Card";
import "./style.css";

export default function CardsSection(props){
    const handleChangeOrder = (event) => {
        props.setOrder(event.target.value);
    }

    const checkedSizes = props.radialSizes.filter((size, index) => 
                        props.checkedState[index]
                    )

    const aHasB = (arrA, arrB) => {
        for (let i = 0; i < arrB.length; i++){
            if (!arrA.includes(arrB[i])){
                return false;
            }
        }
        return true;
    }

    const verify = (checkedSizes, radialSizes) => {
        if (checkedSizes.length === 0){
            return true;
        } else {
            return aHasB(radialSizes, checkedSizes);
        }
    }

    return (
        <section id="cards-section">
            <div id="select-container">
                <select id="order-select" value={props.order} onChange={handleChangeOrder}>
                    <option value="">-Order by price-</option>
                    <option value="Crescente">Ascending</option>
                    <option value="Decrescente">Descending</option>
                </select>
            </div>
            <div id="cards-container">
                {props.products
                    .filter(part => (part["Name"].toLowerCase())
                        .includes(props.productName.toLowerCase()))
                    .filter(part => props.minimumPrice? part["Cost"] >= Number(props.minimumPrice) : true)
                    .filter(part => props.maximumPrice? part["Cost"] <= Number(props.maximumPrice) : true)
                    .filter(part => props.category? part["Category"] === props.category : true)
                    .filter(part => verify(checkedSizes, part["RadialSize"]))
                    .sort((a,b) => {
                        if (props.order === "Crescente"){
                            return a["Cost"] < b["Cost"] ? -1 : 1;
                        } else if (props.order === "Decrescente"){
                            return a["Cost"] < b["Cost"] ? 1 : -1;
                        }
                    })
                    .map((part, index) => {
                        return <Card 
                                key={index}
                                part={part}
                                products={props.products}
                                setProducts={props.setProducts}
                            />
                })}
            </div>
        </section>
    )
}