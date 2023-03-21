import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Navrout from "../../Navrout/Navrout";

const Layout = () => {
    return <>
    <Header/>
     <div>
        <Navrout/>
     </div>
        <Footer/>
    </>
    
};

export default Layout