import React, { useState } from 'react';
import "./Product.css"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';
import productData from '../../productData/productData.json';
import { useParams } from "react-router-dom";
import { useContext } from 'react';
import { useEffect } from 'react';
import { AppContext } from '../../AppContext';
import { CartContext } from "../../CartContext";

const Product = () => {

    const { setIdProduct } = useContext(AppContext);
    const { cartItems, setCartItems } = useContext(CartContext);
    const { id } = useParams();

    const [mainImage, setMainImage] = useState(0)
    const [quantity, setQuantity] = useState(1)

    useEffect(() => {
        localStorage.setItem('idProduct', id);
        setIdProduct(id);
    }, [id, setIdProduct]);


    const product = productData.find((item) => item.id === id);

    const handleAddToCart = () => {
        setCartItems([...cartItems, product]);
    };

    console.log(cartItems) 
    
    return (
        <div className="product">
            <div className="leftProduct">
                <div className="optionalImages">
                    <img src={product.img} alt="" onClick={e => setMainImage(0)} />
                    <img src={product.img2} alt="" onClick={e => setMainImage(1)} />
                </div>
                <div className="mainImage">
                    {mainImage === 0 ? <img src={product.img} alt="" /> : mainImage === 1 ? <img src={product.img2} alt="" /> : null
                    }
                </div>
            </div>
            <div className="rightProduct">
                <h1>{product.title}</h1>
                <span id='price'>${product.price}</span>
                <p>{product.description}</p>
                <div className="productQuantity">
                    <button onClick={() => setQuantity(prev => prev === 1 ? 1 : prev - 1)}>-</button>
                    {quantity}
                    <button onClick={() => setQuantity(prev => prev + 1)}>+</button>
                </div>
                <button className="add" onClick={handleAddToCart}>
                    <AddShoppingCartIcon /> ADD TO CART
                </button>
                <div className="linkFavBalance">
                    <div className="itemFav">
                        <FavoriteBorderIcon /> ADD TO WISH LIST
                    </div>
                    <div className="itemBalance">
                        <BalanceIcon /> ADD TO COMPARE
                    </div>
                </div>
                <div className="info">
                    <span>Seller: {product.seller}</span>
                    <span>Product: {product.product}</span>
                    <span>Tags: {product.tags.join(", ")}</span>
                </div>
                <hr />
                <div className="details">
                    <span>DESCRIPTION</span>
                    <hr />
                    <span>{product.description}</span>
                    <hr />
                    <span>FAQ</span>
                </div>
            </div>
        </div>
    );
}

export default Product;
