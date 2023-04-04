import React, { useState, useEffect, useRef } from 'react';
import '../../fonts/Abrashe/Abrashe.ttf';
import '../../fonts/Dune/Dune_Rise.ttf';
import '../../fonts/High/High Jersey.ttf';
import '../../fonts/Logirent/Logirent-Regular Demo.otf';
import '../../fonts/Shanders/Shanders free.ttf';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlineIcon from '@mui/icons-material/ShoppingCart';
import { Link, useLocation } from "react-router-dom"
import "./Navbar.css"
import Cart from '../../components/Cart/Cart';
import { useContext } from 'react';
import { AppContext } from '../../AppContext';
import { CartContext } from "../../CartContext";


const Navbar = () => {
    const spanRefs = [useRef(null), useRef(null), useRef(null)];
    const location = useLocation();
    const [open, setOpen] = useState(false)
    const { typeP, setTypeP } = useContext(AppContext);
    const { cartItems } = useContext(CartContext);
    const [backgroundColor, setBackgroundColor] = useState("");


    useEffect(() => {
        const span = document.getElementById("mySpan")
        if (window.location.href.indexOf("http://localhost:3000/home") > -1) {
            setBackgroundColor("black");
            span.style.color = "white"
        } else {
            setBackgroundColor("white");
            span.style.color = "black"
        }
    }, [window.location.href]);


    useEffect(() => {
        spanRefs.forEach((ref) => {
            if (window.location.href.indexOf("http://localhost:3000/home") > -1) {
                ref.current.style.color = "white";
            } else {
                ref.current.style.color = "black";
            }
        });
    }, [location, spanRefs]);


    const handleTypeProduct = (typeP) => {
        setTypeP(typeP);
    }
    console.log(typeP)





    return (
        <div className='navbar' style={{ backgroundColor }}>
            <div className='backgroundnav1'>
                <div className='wrapper'>
                    <div className='left'>
                        <div className='itemNobu'>
                            <span id="mySpan" >NOBU</span>
                        </div>
                        <div className='itemNavBar'>
                            <Link className="link" to="/products/1" onClick={(e) => handleTypeProduct("spaceship")} ><span ref={spanRefs[0]}>SPACESHIPS</span></Link>
                        </div>
                        <div className='itemNavBar'>
                            <Link className="link" to="/products/2" onClick={(e) => handleTypeProduct("spacesuits")} ><span ref={spanRefs[1]}>SPACESUITS</span></Link>
                        </div>
                        <div className='itemNavBar'>
                            <Link className="link" to="/products/3" onClick={(e) => handleTypeProduct("creatures")} ><span ref={spanRefs[2]}>CREATURES</span></Link>
                        </div>
                    </div>

                    <div className='mid'>
                        <img src='/img/labestorelogo1.png' alt="" />
                        <Link className="imglogo" to="/home"><span>labestore</span>
                        </Link>
                    </div>
                    <div className='right'>

                        <div className='icons'>
                            <div className="wrapperSearch">
                                <div className="search">
                                    <input placeholder="Search" type="text" />
                                    <div className="searchIcon">
                                        <SearchIcon />
                                    </div>
                                </div>
                            </div>
                            <div className="search" onClick={() => setOpen(!open)}>
                                <div className="cartIcon">
                                    <ShoppingCartOutlineIcon />
                                    <span className='spanIcon'>{cartItems.length}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {open && <Cart />}
        </div >
    );
}

export default Navbar;