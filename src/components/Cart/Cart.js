import React, { useContext, useEffect, useState } from "react";
import "./Cart.css"
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined"
import { CartContext } from "../../CartContext";
import { Link } from "react-router-dom"


const Cart = ({ removeFromCart }) => {
    const { cartItems, setCartItems } = useContext(CartContext);
    const [subtotal, setSubtotal] = useState(0);
    
    useEffect(() => {
        const total = cartItems.reduce((acc, item) => acc + item.price, 0);
        setSubtotal(total);
    }, [cartItems]);

    const resetCart = () => {
        setCartItems([]);
        localStorage.removeItem("cartItems");
    };

    return (
        <div className="cart">
            <h1>  Products in your CART.</h1>
            {cartItems?.map(item => (
                <div className="itemCart" key={item.id}>
                    <div className="itemCartDesc">
                        <img src={item.img} alt="" />
                        <div className="detailsCart">
                            <h1>{item.title}</h1>
                            <p>{item.desc?.substring(0, 100)}</p>
                            <div className="price">${item.price}</div>
                        </div>
                    </div>
                    <DeleteOutlinedIcon className="deleteIcon" onClick={() => removeFromCart(item)} />
                </div>
            ))}
            <div className="totalPrice">
                <span>SUBTOTAL</span>
                <span>${subtotal}</span>
            </div>
            <Link to="https://youtu.be/TEYG1ZXU2Pc"><button>Proceed to Checkout</button></Link>
            <span className="resetCart" onClick={resetCart}>Reset Cart</span>
        </div>
    )
}

const CartWrapper = () => {
    const { cartItems, setCartItems } = useContext(CartContext);
    const removeFromCart = (item) => {
        const newCartItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
        setCartItems(newCartItems);
        localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    };

    return <Cart cartItems={cartItems} removeFromCart={removeFromCart} />;
};

export default CartWrapper;
