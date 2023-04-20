import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { AppContext } from '../../AppContext';

import "./Card.css"

const Card = ({ item }) => {
    const { setIdProduct } = useContext(AppContext);

    const handleClick = () => {
        setIdProduct(item.id);
    }

    return (
        <Link className="linkCard" to={`/product/${item.id}`} onClick={handleClick}>
            <div className="card">
                <div className="imageCard" >
                    {item.isNew && <span>New Season</span>}
                    <img src={item.img} alt="" className="mainImage" />
                </div>
                <h2>{item.title}</h2>
                <div className="prices">
                    <h3>$={item.price}</h3>
                    {item.oldPrice === false ? <h3></h3> : <h3>$={item.oldPrice}</h3>}

                </div>
            </div>
        </Link>
    )
}

export default Card;