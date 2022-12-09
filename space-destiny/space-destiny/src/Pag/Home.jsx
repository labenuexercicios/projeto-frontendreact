import React, {useEffect, useState} from "react";
import Helmet from "../Comp/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import '../styles/home.css';
import heroImg from "../Images/back/Side.jpg"
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Services from "../services/Services";
import ProductsList from "../Comp/UI/ProductsList";
import products from "../Datas/products";

const Home = () =>{

    const [data, setData] = useState(products);
    const year = new Date().getFullYear();

    useEffect(() => {
        const filteredProducts = products.filter(
            (item) => item.category === "travel"
        );
        setData(filteredProducts);
    },[]);

    return (
    <Helmet title={'Home'}>
        <section className="hero__section">
            <Container>
                <Row>
                    <Col lg='6' md='12'>
                        <div className="hero_content">
                            <p className="hero__subtitle">Available travels in {year}
                            </p>
                            <h2>Space for the adventures & curious!</h2>
                            <p>We believe space belongs to everyone, and our porpuse is to connect people around the world through space travel.</p>
                            <motion.button whileTap={{scale:1.2}} className="buy_btn"><Link to='/shop'>TRAVEL NOW!</Link></motion.button>
                        </div>
                    </Col>
                        <Col lg='6' md='12'>
                        <div className="hero_img">
                            <img src={heroImg} alt="hero_img" />
                        </div>
                        </Col>
                </Row>
            </Container>
        </section>
        <Services />
        <section className="trending__products">
            <Container>
                <Row>
                    <Col lg='12' className="text-center">
                    <h3 className="section__title">Featured Trips</h3>
                    </Col>
                    <ProductsList data={data}/>
                </Row>
            </Container>
        </section>
    </Helmet>
    )
}

export default Home

