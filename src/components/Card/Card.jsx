import React from "react";
import "./style.css";

export default function Card(props){
    const addToBag = () => {
        const partsNew = [...props.products];
        partsNew.map(part => {
            if (part["Id"] === props.part["Id"]){
                part["Ordered"] += 1;
            }
        })
        props.setProducts([...partsNew]);
    }

    return (
        <div className="card">
            <div className="card-upper">
            <div className="card-image-container">
                <div className="card-image-text">{props.part.Category}</div>
                <img className="card-image" src={props.part.Image} alt={props.part.Name} />
            </div>
            <div className="card-product-sizes">{props.part["RadialSize"].map((size, index) => {
                return <div key={index} className="card-product-size">{size}</div>
            })}</div>
            <h2 className="card-title">{props.part.Name}</h2>
            <h3 className="card-product-cost">{`K$ ${props.part.Cost}`}</h3>
            <div className="product-general-data">
                {/* <h3>{props.part.Category}</h3> */}
                <h4>{`Mass: ${props.part["Mass"]}t`}</h4>
                <h4>{`Max. Temp.: ${props.part["MaxTemp"]}K`}</h4>
                <h4>{`Tolerance: ${props.part["Tolerance"]}m/s`}</h4>
            </div>
            </div>
            <div className="card-lower">
            <button onClick={addToBag} className="card-button">Add to cart <i className="fa-solid fa-arrow-right"></i></button>
            <h5 className="card-disclaimer">Join the kerbal initiative!</h5>
            </div>
        </div>
    )
}