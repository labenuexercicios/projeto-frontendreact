import React, {useState, useEffect} from 'react';
import { Container, Row, Col } from 'reactstrap';
import { useParams } from 'react-router-dom';
import products from '../Datas/products';
import Helmet from '../Comp/Helmet/Helmet';
import CommonSection from '../Comp/UI/CommonSection';
import "../styles/product-details.css";
import { motion } from 'framer-motion';
import ProductsList from '../Comp/UI/ProductsList';
import { useDispatch } from 'react-redux';
import { cartActions } from '../redux/slices/cartSlice';
import { toast } from 'react-toastify';

const Infoprod = () => {

    const {id} = useParams()
    const product = products.find(item=> item.id ===id)
    const dispatch = useDispatch()

    const { imgUrl, productName, price, description, shortDesc, category } = product
  
    const relatedProducts = products.filter((item)=> item.category === category);

    const submitHandler = (e) => {
        e.preventDefault();
    }
  
    const addToCart =()=>{
        dispatch(cartActions.addItem({
            id,
            image:imgUrl,
            productName,
            price,
        })
      );

    toast.success("Product added to cart!")
    };
    
    return (
  <Helmet title={productName}>
    <CommonSection title={productName}/>

    <section className='pt-0'>
        <Container>
            <Row>
                <Col lg='6'>
                    <img src={imgUrl} alt="" />
                </Col>

                <Col lg='6'>
                    <div className="product__details">
                        <h2>{productName}</h2>
                    
                    <span className='product__price'>${price}</span>
                    <p className='product__descrp'>{shortDesc}</p>

                    <motion.button whileTap={{scale: 1.2}} className="buy_btn" onClick={addToCart}>ADD TO CART</motion.button>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>

    <section>
        <Container>
            <Row>
                <Col lg='12'>
                    <div className="tab__wrapper">
                        <h6>Description</h6>
                    </div>

                    <div className="tab__content">
                        <p>{description}</p>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  </Helmet>
  );
}

export default Infoprod;