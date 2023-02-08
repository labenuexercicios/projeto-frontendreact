import "./style.css"
import { ContextGlobal } from "../../context/ContextGlobal"
import { useContext } from "react";

export const Card = (props) => {
    const context = useContext(ContextGlobal)
    const Product = props.product
    const cart = context.cart
    const setCart = context.setCart 

    const addProduct = (product) => {
        const newProduct = cart.find((item) => item.id === product.id)
        if (newProduct === undefined) {
            setCart([...cart, { ...product, amount: 1 }])

        } else {
            const newCart = cart.map((item) => {
                if (item.id === product.id) {
                    return { ...newProduct, amount: newProduct.amount + 1 }
                } else {
                    return item
                }
            })
            setCart(newCart)
        }
    };

    return (
        <div>
            <div className="container">
                <div className="card">
                    <div className="face face1">
                        <div className="content">
                            <img src={props.product.imageUrl} alt="" />
                        </div>
                    </div>
                    <div className="face face2">
                        <div className="content">
                            <h2>{props.product.name}</h2>
                            <h3>R${props.product.price}</h3>
                            <p>{props.product.description}.</p>
                            <button className="btn-add-cart" onClick={() => addProduct(Product)}>Add Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
