import React from "react";
import "../styles/cart.css";
import Helmet from "../Comp/Helmet/Helmet";
import CommonSection from "../Comp/UI/CommonSection";
import { Container, Row, Col } from "reactstrap";
import tdImg from "../Images/front/vg.jpg"
import { motion } from "framer-motion";
import {cartActions} from "../redux/slices/cartSlice";
import { useSelector, useDispatch } from "react-redux";

const Cart = () =>{

    const cartItems = useSelector(state=> state.cart.cartItems);
    const totalAmount = useSelector(state=> state.cart.totalAmount);

    return <Helmet title='Cart'>

    <CommonSection title='Shopping Cart'/>
    <section>
        <Container>
            <Row>
                <Col lg='9'>
                    {
                        cartItems.length===0 ? ( <h2>No item added to the cart</h2>
                          )  : (<table className="table bordered">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>Remove</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                cartItems.map((item, index)=>(
                            <tr key={index}>
                                <td><img src={item.imgUrl} alt="" /></td>
                                <td>{item.productName}</td>
                                <td>${item.price}</td>
                                <td>{item.quantity}px</td>
                                <td><motion.i whileTap={{scale: 1.2}} class="ri-delete-bin-6-line"></motion.i></td>
                            </tr>
                                ))
                            }
                        </tbody>
                    </table>)
                    }
                    
                </Col>

                <Col lg='3'>
                    <div className="total__cart">
                        <h6>Subtotal</h6>
                        <span>{totalAmount}</span>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
    </Helmet>
}

export default Cart