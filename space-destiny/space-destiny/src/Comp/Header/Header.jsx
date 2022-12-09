import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import './header.css';
import {motion} from "framer-motion"

import logo from '../../Images/back/Side.jpg';
import user from '../../Images/back/user1.png'
import backg from '../../Images/back/backg.jpg';
import cart from '../../Images/back/cart.png';
import star from '../../Images/back/star.png'
import rocket from '../../Images/back/rocket.gif'

import { Container, Row } from "reactstrap";
import { useRef } from "react";
import { useSelector } from "react-redux";

const nav_links = [
    {
        path:"home",
        display:"Home"
    },
    {
        path:"shop",
        display:"Shop"
    },
    {
        path:"cart",
        display:"Cart"
    },
]
const Header = () =>{
    const totalQuantity = useSelector(state=> state.cart.totalQuantity)
    const menuRef = useRef(null);
    const navigate = useNavigate();
    const menuToggle = () => menuRef.current.classList.toggle("active__menu")
    const navigateToCart =()=>{
        navigate("/cart")
    }

    return <header className="header">
        <Container>
            <Row>
                <div className="nav_bar">
                    <div className="logo">
                    
                        <div>
                            <h1>Space Destiny</h1>
                        </div>
                    </div>
                        <div className="navigation" ref={menuRef} onClick={menuToggle}>
                    <ul className="menu">
                        {nav_links.map((item, index)=>(
                             <li className="nav_item" key={index}>
                                <NavLink to={item.path} className={(navClass)=> navClass.isActive ? "nav_active" : ""} >{item.display}</NavLink>
                             </li>       
                            ))
                        }
                    </ul>
                        </div>
                <div className="nav_icons">
                    <span className='fav_icon'>
                    <motion.img whileTap={{ scale: 1.2 }} src={star} alt='fav_icon'/>
                    <span className="badge"> 0 </span>
                    </span>
                    <span className="cart_icon" onClick={navigateToCart}>
                    <motion.img whileTap={{ scale: 1.2 }}src={cart}/>
                    <span className="badge">{totalQuantity}</span>
                    </span>
                    <span className="user_icon">
                    <motion.img whileTap={{ scale: 1.2 }} src={user} />
                    {/* <motion.img whileTap={{ scale: 1.2 }} src={rocket} alt="rocket_icon"/> */}
                    </span>
                    <div className="mobile_menu">
                    <span onClick={menuToggle}>
                        <i className="ri-menu-fill"></i>
                    </span>
                </div>
                </div>
                
            </div>
            </Row>
        </Container>
    </header>
};

export default Header